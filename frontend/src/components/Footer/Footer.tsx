import * as React from "react";
import { Container } from "react-bootstrap";
import { Telegram, Twitter } from "react-bootstrap-icons";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <Container fluid className={styles.Footer}>
      <div>Copyright &copy;2022 PadloMoon</div>
      <div className={styles.Links}>
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#tokenomics">Tokenomics</a>
          <a href="#roadmap">Roadmap</a>
        </div>
        <div>
          <a href="https://t.me/PADLOmoon" target="_blank" rel="noreferrer">
            <Telegram />
          </a>
          <a
            href="https://twitter.com/PadloMoon"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
