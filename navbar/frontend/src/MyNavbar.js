import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

function MyNavbar() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">My Navbar</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">
          Dashboard
        </NavItem>
        <NavItem eventKey={2} href="#">
          Address Book
        </NavItem>
        <NavItem eventKey={3} href="#">
          Calendar
        </NavItem>
        <NavItem eventKey={4} href="#">
          Ill Charts
        </NavItem>
        <NavItem eventKey={5} href="#">
          Documents
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default MyNavbar;