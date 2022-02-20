import * as React from "react";
import classNames from "classnames";
import { Row, Col, Card } from "react-bootstrap";

import styles from "./Tokenomics.module.css";

type Props = {
  className: any;
};

const Tokenomics = ({ className }: Props) => {
  return (
    <>
      <Row className="justify-content-md-center">
        <Col
          xs
          lg="6"
          className={classNames(className, styles.tokenomicsTitle)}
        >
          Tokenomics
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className={classNames(className, styles.Card)}>
            <Card.Body>
              <Card.Title className={classNames(styles.tokenomicsCardTitle)}>
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
          <Card className={className}>
            <Card.Body>
              <Card.Title className={classNames(styles.tokenomicsCardTitle)}>
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
          <Card className={className}>
            <Card.Body>
              <Card.Title className={classNames(styles.tokenomicsCardTitle)}>
                3% Treasury
              </Card.Title>
              <Card.Text>
                We need some funds, like marketing to reach the moon. We're
                always looking for ways to grow community.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Tokenomics;
