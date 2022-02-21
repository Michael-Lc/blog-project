import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar expand="lg" sticky="top" className='bg-success'>
      <Container>
        <Navbar.Brand href="/">React-Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="btn-outline-none" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-end">
            <NavLink to='/' className='nav-link'>Home</NavLink>
            <NavLink to="/signin" className='nav-link'>Sign In</NavLink>
            <NavLink to='/addPost' className="nav-link btn btn-dark text-white">New Post</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
