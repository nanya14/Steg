import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar expand="md" id="mainNavbar" fixed="top">
        <Container>
          <Navbar.Brand href="/">Steganography</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" id="nav-link">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/encode">Encode</Nav.Link>
              <Nav.Link href="/decode">Decode</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
