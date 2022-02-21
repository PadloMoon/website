import * as React from "react";
import classNames from "classnames";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Row, Col } from "react-bootstrap";
import styles from "./Roadmap.module.css";

type Props = {
  className: any;
};

const Roadmap = ({ className }: Props) => {
  return (
    <>
      <Row className="justify-content-center">
        <Col
          xs={10}
          lg={6}
          className={classNames(className, styles.RoadmapTitle)}
        >
          Roadmap
        </Col>
      </Row>
      <VerticalTimeline lineColor="#daa520" className={styles.VerticalTimeLine}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName={styles.Date}
          textClassName={styles.RoadmapText}
          contentArrowStyle={{ borderRight: "1vh solid  #daa520" }}
          date="Q1/2022"
          iconClassName={styles.Icon}
        >
          <ul>
            <li>
              <span style={{ textDecoration: "line-through" }}>
                Presale & Launch
              </span>
            </li>
            <li>
              <span style={{ textDecoration: "line-through" }}>
                DEX listing
              </span>
            </li>
            <li>200 holders</li>
            <li>Website</li>
            <li>
              Community building: contests, games and grass root marketing
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Q2/2022"
          dateClassName={styles.Date}
          textClassName={styles.RoadmapText}
          iconClassName={styles.Icon}
          contentArrowStyle={{ borderRight: "1vh solid  #daa520" }}
        >
          <ul>
            <li>500 holders</li>
            <li>Padlo NFT</li>
            <li>Project Paracosm</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Q3/2022"
          dateClassName={styles.Date}
          textClassName={styles.RoadmapText}
          iconClassName={styles.Icon}
          contentArrowStyle={{ borderRight: "1vh solid  #daa520" }}
        >
          <ul>
            <li>1500 holders</li>
            <li>CEX listing</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default Roadmap;
