import React from "react";
import { Modal, Card } from "react-bootstrap";
import classNames from "classnames";

import { useAppDispatch } from "../../slices/hooks";
import MetamaskLogo from "../../assets/icons/metamask-minified.svg";
import WalletConnectLogo from "../../assets/icons/walletconnect-logo.svg";
import DefiWalletLogo from "../../assets/icons/defiwallet.png";

import * as walletMetamask from "../../utils/metamask";
import * as walletDefiwallet from "../../utils/defiwallet";
import * as walletConnect from "../../utils/walletConnect";
import {
  setRefreshing,
  updateQueryResults,
  updateWallet,
} from "../../slices/walletSlice";
import * as utils from "../../utils/utils";
import { defaultQueryResults, IWallet } from "../../slices/interfaces";

import styles from "./WalletConnect.module.css";

type Props = {
  show: boolean;
  handleClose: () => void;
};

const WalletConnect = (props: Props) => {
  const { show, handleClose } = props;

  const dispatch = useAppDispatch();
  const handleConnect = async (
    option: "metamask-injected" | "defiwallet" | "wallet-connect"
  ) => {
    handleClose();
    dispatch(setRefreshing({ status: true, message: "Connecting wallet..." }));
    let wallet: IWallet;
    switch (option) {
      case "metamask-injected":
        wallet = await walletMetamask.connect();
        break;
      case "defiwallet":
        wallet = await walletDefiwallet.connect();
        break;
      case "wallet-connect":
        wallet = await walletConnect.connect();
        break;
      default:
        wallet = await walletMetamask.connect();
        break;
    }
    if (wallet.connected) {
      const lastBlockNumber = await utils.getLastBlockNumber(
        wallet.serverWeb3Provider
      );
      const croBalance = await utils.getCroBalance(
        wallet.serverWeb3Provider,
        wallet.address
      );
      const padloBalance = await utils.getPadloBalance(
        wallet.serverWeb3Provider,
        wallet.address
      );
      console.log("padloBalance", padloBalance);
      console.log("cro", croBalance);
      dispatch(updateWallet(wallet));
      dispatch(
        updateQueryResults({
          ...defaultQueryResults,
          lastBlockNumber,
          croBalance,
          padloBalance: 0,
        })
      );
    }
    dispatch(setRefreshing({ status: false, message: "Completed" }));
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className={styles.ModalTitle}>
          Connect your wallet
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.ModalBody}>
        <Card className={styles.card}>
          <Card.Img
            variant="top"
            src={MetamaskLogo}
            className={classNames(styles.MetamaskLogo, styles.WalletLogo)}
            onClick={() => handleConnect("metamask-injected")}
          />
          <Card.Body>
            <Card.Text className={styles.WalletName}>Metamask</Card.Text>
          </Card.Body>
        </Card>
        <Card className={styles.card}>
          <Card.Img
            variant="top"
            className={classNames(styles.WalletconnectLogo, styles.WalletLogo)}
            src={WalletConnectLogo}
            onClick={() => handleConnect("wallet-connect")}
          />
          <Card.Body>
            <Card.Text className={styles.WalletName}>WalletConnect</Card.Text>
          </Card.Body>
        </Card>
        <Card className={styles.card}>
          <Card.Img
            variant="top"
            className={classNames(styles.DefiWalletLogo, styles.WalletLogo)}
            src={DefiWalletLogo}
            onClick={() => handleConnect("defiwallet")}
          />
          <Card.Body>
            <Card.Text className={styles.WalletName}>
              Crypto.com DefiWallet
            </Card.Text>
          </Card.Body>
        </Card>
      </Modal.Body>
    </Modal>
  );
};

export default WalletConnect;
