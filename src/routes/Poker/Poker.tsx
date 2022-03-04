import * as React from "react";
import { Container, Image, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

import PadloPoker from "../../assets/images/padlo_poker.jpg";

import mainStyles from "../../styles/main.module.css";
import styles from "./Poker.module.css";

const Poker = () => {
  return (
    <>
      <Container fluid="lg" className={mainStyles.Container}>
        <Navigation />
        <Row className="justify-content-center">
          <Image
            fluid
            alt="Padlo poker"
            className={styles.PokerLogo}
            src={PadloPoker}
          />
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Poker;
