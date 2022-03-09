import React, { useState } from "react";
import classNames from "classnames";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import WalletConnect from "../../components/WalletConnect/WalletConnect";

import PokerCollab from "../../assets/images/padlo_poker_programx.png";

import mainStyles from "../../styles/main.module.css";
import styles from "./Poker.module.css";
import { useAppDispatch, useAppSelector } from "../../slices/hooks";
import { setRefreshing, updateWallet } from "../../slices/walletSlice";
import { defaultWallet } from "../../slices/interfaces";
import { wait } from "../../utils/utils";
import { payWithMetamask } from "../../utils/transactions";

type WalletState = "connected" | "loading" | "disconnected";

const Poker = () => {
  const [show, setShow] = useState(false);

  const dispatch = useAppDispatch();
  const refreshing = useAppSelector((state) => state.wallet.refreshing);
  const wallet = useAppSelector((state) => state.wallet.wallet);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const disconnect = async () => {
    dispatch(setRefreshing({ status: true, message: "Disconnecting" }));
    dispatch(updateWallet(defaultWallet));
    await wait(1000);
    dispatch(setRefreshing({ status: false, message: "Completed" }));
  };

  const getWalletState = (): WalletState => {
    if (refreshing.status) {
      return "loading";
    }
    if (wallet.address.length) {
      return "connected";
    }
    return "disconnected";
  };

  const getWalletButtonTitle = (state: WalletState): string => {
    switch (state) {
      case "loading":
        return refreshing.message;
      case "connected":
        return "Disconnect";
      case "disconnected":
        return "Connect wallet";
      default:
        return "Connect wallet";
    }
  };

  return (
    <>
      <Container fluid="lg" className={mainStyles.Container}>
        <Navigation />
        {/* <Row>
          <Col>
            <Button
              disabled={refreshing.status}
              size="lg"
              className={styles.ConnectWalletButton}
              onClick={
                getWalletState() !== "connected" ? handleShow : disconnect
              }
              active
            >
              {getWalletButtonTitle(getWalletState())}
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button size="lg" onClick={() => payWithMetamask(wallet.address)}>
              Pay
            </Button>
          </Col>
        </Row> */}
        <Row className="justify-content-center">
          <Col md="10">
            <div
              className={classNames(
                mainStyles.CommonElement,
                styles.PokerInfoContainer
              )}
            >
              <h3 className={styles.PokerTitle}>
                PadloMoon’s poker tournaments
              </h3>
              <p>
                Padlo likes to gamble and even more gamble with friends and
                community members. PadloMoon community collaboration program
                (Program-X) is live and couple of communities and projects have
                already joined! Together with our partners we run series of
                poker tournaments and challenge more projects and communities to
                join for one big family, where everyone has a chance to connect
                with other projects and communities for beneficial purposes or
                even partnering for each other.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <h1 className={styles.PokerLogoTitle}>Coming up next!</h1>
          <Image src={PokerCollab} className={styles.PokerLogo} />
        </Row>
        <Row className="justify-content-center">
          <Col md="10">
            <div
              className={classNames(mainStyles.CommonElement, styles.Calendar)}
            >
              <h4 className={styles.CalendarTitle}>Poker Calendar</h4>
              <ul>
                <li>25.2. PadloMoon Poker Tournament #1</li>
                <li>5.3. PadloMoon x Crows Club</li>
                <li>12.3. PadloMoon x CroTrend x Crows Club x The Cronicle</li>
              </ul>
            </div>
          </Col>
        </Row>
        <WalletConnect show={show} handleClose={handleClose} />
      </Container>
      <Footer />
    </>
  );
};

export default Poker;
