import * as React from "react";
import classNames from "classnames";
import { Row, Col, Card } from "react-bootstrap";

import mainStyles from "../../styles/main.module.css";
import styles from "./Tokenomics.module.css";

const Tokenomics = () => {
  return (
    <>
      <Row className="justify-content-center">
        <Col
          xs={10}
          md={8}
          lg={6}
          className={classNames(
            mainStyles.CommonElement,
            mainStyles.Title,
            styles.TokenomicsTitle
          )}
        >
          Tokenomics
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className={classNames(mainStyles.CommonElement, styles.Card)}>
            <Card.Body>
              <Card.Title className={classNames(styles.TokenomicsCardTitle)}>
                1% Reward
              </Card.Title>
              <Card.Text>
                Reward is paid to holders in PDM. Hold on your Padlo and you
                will get even more Padlo!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className={mainStyles.CommonElement}>
            <Card.Body>
              <Card.Title className={classNames(styles.TokenomicsCardTitle)}>
                3% liquidity pool
              </Card.Title>
              <Card.Text>
                3% of every transaction is put to liquidity pool to make Padlo
                more stable against big moves
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className={mainStyles.CommonElement}>
            <Card.Body>
              <Card.Title className={classNames(styles.TokenomicsCardTitle)}>
                3% Treasury
              </Card.Title>
              <Card.Text>
                We need some funds, for example for marketing to get more
                friends for Padlo. We're always looking for ways to grow this
                great community!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Tokenomics;
