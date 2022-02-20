import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./App.module.css";
import logo from "./assets/images/Padlologo_new_transparent.png";
import Roadmap from "./components/Roadmap";
import classNames from "classnames";
import Tokenomics from "./components/Tokenomics";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container fluid="lg" className={styles.Container}>
        {/* eslint-disable-next-line */}
        <a id="home" />
        <Navigation />
        <Row className="justify-content-md-center">
          <Image src={logo} fluid alt="padlo logo" className={styles.logo} />
        </Row>
        <Row>
          <div className={styles.logoTitle}>PadloMoon</div>
        </Row>
        {/* eslint-disable-next-line */}
        <a id="about" />
        <Row>
          <Col className={classNames(styles.about, styles.commonElement)}>
            <p>
              Meet Padlo, 1920´s Gangster-type gentleman, who launched token
              named after him, first ever on Crow Finance launchpad. Padlo
              rewards his holders with PDM token from every transaction. Later
              on you will be introduced with his amazing NFT collection and
              perhaps few other great utilities as well!
            </p>
          </Col>
        </Row>
        {/* eslint-disable-next-line */}
        <a id="tokenomics" />
        <Tokenomics className={styles.commonElement} />
        {/* eslint-disable-next-line */}
        <a id="roadmap" />
        <Roadmap className={styles.commonElement} />
      </Container>
      <Footer />
    </>
  );
}

export default App;
