import classNames from "classnames";
import * as React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Telegram, Twitter } from "react-bootstrap-icons";
import styles from "./Navigation.module.css";
// @ts-ignore
import pdf from "../assets/PadloMoon_litepaper.pdf";

const Navigation = () => {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      collapseOnSelect
      className={styles.NavbarCustom}
    >
      <Container>
        <Navbar.Brand href="#" className={styles.Brand}>
          PadloMoon
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" navbarScroll>
            <Nav.Link href="/#home" className={styles.NavbarLink}>
              Home
            </Nav.Link>
            <Nav.Link href="/#tokenomics" className={styles.NavbarLink}>
              Tokenomics
            </Nav.Link>
            <Nav.Link href="/#roadmap" className={styles.NavbarLink}>
              Roadmap
            </Nav.Link>
            <Nav.Link as={Link} to="/poker" className={styles.NavbarLink}>
              Poker
            </Nav.Link>
            <Nav.Link
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.NavbarLink}
            >
              Litepaper
            </Nav.Link>
            <Nav.Link
              href="https://t.me/PADLOmoon"
              target="_blank"
              rel="noreferrer"
              className={classNames(styles.NavbarLink, styles.NavbarIcon)}
            >
              <Telegram className={styles.Icon} />
            </Nav.Link>
            <Nav.Link
              href="https://twitter.com/PadloMoon"
              target="_blank"
              rel="noreferrer"
              className={classNames(styles.NavbarLink, styles.NavbarIcon)}
            >
              <Twitter className={styles.Icon} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
