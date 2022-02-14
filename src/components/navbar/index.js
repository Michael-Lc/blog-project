import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">React-Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-end">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Sign In</Nav.Link>
              {/* <Nav.Link href="#link">Link</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
