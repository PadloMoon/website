import * as React from "react";
import { Container } from "react-bootstrap";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <Container fluid className={styles.Footer}>
      <div>Copyright &copy;2022 PadloMoon</div>
      <div>
        <a href="#home" className={styles.NavbarLink}>
          Home |
        </a>
        <a href="#about" className={styles.NavbarLink}>
          About |
        </a>
        <a href="#tokenomics" className={styles.NavbarLink}>
          Tokenomics |
        </a>
        <a href="#roadmap" className={styles.NavbarLink}>
          Roadmap |
        </a>
        <a
          href="https://t.me/PADLOmoon"
          target="_blank"
          className={styles.NavbarLink}
          rel="noreferrer"
        >
          Telegram |
        </a>
        <a
          href="https://twitter.com/PadloMoon"
          target="_blank"
          className={styles.NavbarLink}
          rel="noreferrer"
        >
          Twitter
        </a>
      </div>
    </Container>
  );
};

export default Footer;
