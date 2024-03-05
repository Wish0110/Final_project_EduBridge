import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {' '}Your Website
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/map">
            Map
          </Nav.Link>
          <Nav.Link as={Link} to="/university">
            University
          </Nav.Link>
          <Nav.Link as={Link} to="/courses">
            Courses
          </Nav.Link>
          <Nav.Link as={Link} to="/service">
            Service
          </Nav.Link>
          <Nav.Link as={Link} to="/help">
            Help
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;