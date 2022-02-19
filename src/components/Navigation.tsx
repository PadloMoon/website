import * as React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      collapseOnSelect
      className={styles.NavbarCustom}
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" navbarScroll>
            <Nav.Link href="#home" className={styles.NavbarLink}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" className={styles.NavbarLink}>
              About
            </Nav.Link>
            <Nav.Link href="#tokenomics" className={styles.NavbarLink}>
              Tokenomics
            </Nav.Link>
            <Nav.Link href="#roadmap" className={styles.NavbarLink}>
              Roadmap
            </Nav.Link>
            <Nav.Link
              href="https://t.me/PADLOmoon"
              target="_blank"
              className={styles.NavbarLink}
            >
              Telegram
            </Nav.Link>
            <Nav.Link
              href="https://twitter.com/PadloMoon"
              target="_blank"
              className={styles.NavbarLink}
            >
              Twitter
            </Nav.Link>
            {/* <Nav.Link
              href="https://www.reddit.com/user/PadloMoon"
              target="_blank"
              className={styles.NavbarLink}
            >
              Reddit
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
