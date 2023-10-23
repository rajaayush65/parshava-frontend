// Header.js
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/">Parshava Holdings</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </Nav.Item>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Item>
            <Link to="/orders" className="nav-link">
              Orders
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
