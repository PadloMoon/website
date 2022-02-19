import React from "react";
import { Container, Row, Col, Navbar, Nav, Image, Card } from "react-bootstrap";
import styles from "./App.module.css";
import logo from "./assets/images/Padlologo_new_transparent.png";
import Roadmap from "./components/Roadmap";
import classNames from "classnames";
import Tokenomics from "./components/Tokenomics";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Container fluid="lg" className={styles.Container}>
        <a id="home" />
        <Navigation />
        <Row className="justify-content-md-center">
          <Image src={logo} fluid alt="padlo logo" className={styles.logo} />
        </Row>
        <Row>
          <div className={styles.logoTitle}>PadloMoon</div>
        </Row>
        <a id="about" />
        <Row>
          <Col className={classNames(styles.about, styles.commonElement)}>
            <p>
              Meet Padlo, the most feared gangster in 1920's. His token was the
              first ever launched from CrowFi launchpad! Later on you will be
              introduced with his amazing NFT collection and perhaps few other
              great utilities as well!
            </p>
            <p>
              Padlo was found when team of individuals wanted to launch first
              token from CrowFi's launchpad. Time was limited, but we held a
              short presale and launched PadloMoon successfully. We didn't had
              any actual plans before launch but when launch went well with over
              2200% gains in the first 24h we realized that we have a gem in our
              hands. Now we're working hard to bring our community more things
              to enjoy while traveling to moon!
            </p>
          </Col>
        </Row>
        <a id="tokenomics" />
        <Tokenomics className={styles.commonElement} />
        <a id="roadmap" />
        <Roadmap className={styles.commonElement} />
      </Container>
    </>
  );
}

export default App;
