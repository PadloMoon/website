import * as React from "react";
import classNames from "classnames";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Row, Col } from "react-bootstrap";
import { BiLock, BiRocket } from "react-icons/bi";
import { RiStarLine } from "react-icons/ri";
import { HiCurrencyDollar, HiFire } from "react-icons/hi";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa";

import "react-vertical-timeline-component/style.min.css";
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
          date="Stage 1"
          iconClassName={styles.Icon}
          icon={<BiRocket color="#e0e0e0" size={48} />}
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
            <li>
              <span style={{ textDecoration: "line-through" }}>Website</span>
            </li>
            <li>200 holders</li>
            <li>
              Community building: contests, games and grass root marketing
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Stage 2"
          dateClassName={styles.Date}
          textClassName={styles.RoadmapText}
          iconClassName={styles.Icon}
          icon={<HiCurrencyDollar color="#e0e0e0" size={36} />}
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
          date="Stage 3"
          dateClassName={styles.Date}
          textClassName={styles.RoadmapText}
          iconClassName={styles.Icon}
          icon={<HiFire color="#e0e0e0" size={36} />}
          contentArrowStyle={{ borderRight: "1vh solid  #daa520" }}
        >
          <ul>
            <li>1500 holders</li>
            <li>CEX listing</li>
            <li>
              <BiLock color="#e0e0e0" size={48} />
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Stage 4"
          dateClassName={styles.Date}
          textClassName={styles.RoadmapText}
          iconClassName={styles.Icon}
          icon={<AiTwotoneThunderbolt color="#e0e0e0" size={36} />}
          contentArrowStyle={{ borderRight: "1vh solid  #daa520" }}
        >
          <BiLock color="#e0e0e0" size={48} />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Stage 5"
          dateClassName={styles.Date}
          textClassName={styles.RoadmapText}
          iconClassName={styles.Icon}
          icon={<FaChartLine color="#e0e0e0" size={36} />}
          contentArrowStyle={{ borderRight: "1vh solid  #daa520" }}
        >
          <BiLock color="#e0e0e0" size={48} />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconClassName={styles.Icon}
          icon={<RiStarLine color="#e0e0e0" size={36} />}
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default Roadmap;
