import React from "react";
import classNames from "classnames";
import { Container, Row, Col, Image } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";

import PokerCollab from "../../assets/images/padlo_poker_programx.png";

import mainStyles from "../../styles/main.module.css";
import styles from "./Poker.module.css";
import { Link } from "react-router-dom";

const Poker = () => {
  return (
    <>
      <Container fluid="lg" className={mainStyles.Container}>
        <Navigation />
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
        {/* <Row>
          <h1 className={styles.PokerLogoTitle}>Coming up next!</h1>
          <Image src={PokerCollab} className={styles.PokerLogo} />
        </Row> */}
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
                <li>
                  18.3. PadloMoon x Boonk Gang x Crypto Investors x Crows Club
                </li>
                <li>26.3. PadloMoon x Kronos x Crows Club</li>
              </ul>
            </div>
          </Col>
        </Row>
        {/* <Row>
          <Link to="/poker-registration" className={mainStyles.Link}>
            Register for next tournament!
          </Link>
        </Row> */}
      </Container>
      <Footer />
    </>
  );
};

export default Poker;
