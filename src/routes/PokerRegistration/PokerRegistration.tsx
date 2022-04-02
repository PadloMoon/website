import React, { useState } from "react";
import classNames from "classnames";

import {
  Button,
  Col,
  Container,
  Row,
  Form,
  Modal,
  Spinner,
} from "react-bootstrap";

import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import WalletConnect from "../../components/WalletConnect/WalletConnect";

import { useAppDispatch, useAppSelector } from "../../slices/hooks";
import { defaultWallet } from "../../slices/interfaces";
import { setRefreshing, updateWallet } from "../../slices/walletSlice";
import { wait } from "../../utils/utils";
import { payWithMetamask } from "../../utils/transactions";

import styles from "./PokerRegistration.module.css";
import mainStyles from "../../styles/main.module.css";
import { sendRegistrationEmail } from "../../utils/sendRegistrationEmail";

type WalletState = "connected" | "loading" | "disconnected";

const REGISTRATION_FEE = 60;
const PADLO_FEE = 6;
const POKERCLUB_URL =
  "https://www.pokernow.club/mtt/cronos-poker-night-4-GICfoTRwyA";

const PokerRegistration = () => {
  const [showWalletConnect, setShowWalletConnect] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useAppDispatch();
  const refreshing = useAppSelector((state) => state.wallet.refreshing);
  const wallet = useAppSelector((state) => state.wallet.wallet);
  const processing = useAppSelector((state) => state.transaction.processing);

  const toggleWalletConnect = () => setShowWalletConnect(!showWalletConnect);

  const toggleRegistrationModal = () =>
    setShowRegistrationModal(!showRegistrationModal);

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

  const handleSubmit = async (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    toggleRegistrationModal();
    const txRes = await payWithMetamask(wallet.address);
    if (txRes) {
      const emailRes = await sendRegistrationEmail(
        event.target.username.value,
        txRes
      );
      if (!emailRes) {
        setError(true);
      }
    } else {
      setError(true);
    }
    event.target.username.value = "";
    setValidated(true);
  };

  return (
    <>
      <Container fluid="lg" className={mainStyles.Container}>
        <Navigation />
        <Row>
          <Col style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              disabled={refreshing.status}
              size="lg"
              className={classNames(
                mainStyles.ButtonSecondary,
                styles.ConnectWalletButton
              )}
              onClick={
                getWalletState() !== "connected"
                  ? toggleWalletConnect
                  : disconnect
              }
              active
            >
              {getWalletButtonTitle(getWalletState())}
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={11} md={10} lg={8}>
            <h1
              className={classNames(mainStyles.Title, mainStyles.CommonElement)}
            >
              Register for Padlo's Poker Tournament!
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            lg="10"
            className={classNames(
              mainStyles.CommonElement,
              styles.Registration
            )}
          >
            <div>
              <p>
                First, register to Poker at{" "}
                <a
                  className={mainStyles.Link}
                  target="_blank"
                  rel="noreferrer"
                  href={POKERCLUB_URL}
                >
                  Pokernow.club
                </a>
                . Then fill in your name, connect your wallet and hit register
                button. Use the same name as in pokernow.club.
              </p>
              <p>
                Registration fee is{" "}
                <strong>{`${REGISTRATION_FEE} + ${PADLO_FEE} CRO`}</strong>
              </p>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                  <Form.Control
                    className={styles.Input}
                    required
                    type="text"
                    placeholder="Enter username"
                    name="username"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a username
                  </Form.Control.Feedback>
                </Form.Group>
                <Button
                  className={classNames(mainStyles.Button, styles.SubmitButton)}
                  disabled={!wallet.connected}
                  type="submit"
                >
                  {processing ? "Processing" : "Register"}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <WalletConnect
        show={showWalletConnect}
        handleClose={toggleWalletConnect}
      />
      <Footer />
      <Modal
        show={showRegistrationModal}
        onHide={toggleRegistrationModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Registering to poker</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {processing ? (
            <>
              <Spinner animation="border" />{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  marginLeft: "2rem",
                }}
              >
                Processing your registration
              </span>
            </>
          ) : error ? (
            "Something went wrong with your registration. Check your transaction and if it was completed, contact admin@padlomoon.com"
          ) : (
            "Registration was completed! Thank you and see you on the table!"
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={processing} onClick={toggleRegistrationModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PokerRegistration;
