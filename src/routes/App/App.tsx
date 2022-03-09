import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Roadmap from "../../components/Roadmap/Roadmap";
import classNames from "classnames";
import Tokenomics from "../../components/Tokenomics/Tokenomics";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

import logo from "../../assets/images/Padlologo_new_transparent.png";
import mainStyles from "../../styles/main.module.css";
import styles from "./App.module.css";

function App() {
  console.log("styles", styles);
  return (
    <>
      <Container fluid="lg" className={mainStyles.Container}>
        {/* eslint-disable-next-line */}
        <a id="home" />
        <Navigation />
        <Row className="justify-content-center">
          <Image src={logo} alt="padlo logo" className={styles.Logo} />
        </Row>
        <Row>
          <div className={styles.LogoTitle}>PadloMoon</div>
        </Row>
        {/* eslint-disable-next-line */}
        <a id="about" />
        <Row className="justify-content-center">
          <Col
            lg="10"
            className={classNames(styles.About, mainStyles.CommonElement)}
          >
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
        <Tokenomics className={mainStyles.CommonElement} />
        {/* eslint-disable-next-line */}
        <a id="roadmap" />
        <Roadmap className={mainStyles.CommonElement} />
      </Container>
      <Footer />
    </>
  );
}

export default App;
