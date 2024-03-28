/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './navbar.css';
import logo from './logo.png'; // Replace with your logo image path

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">More</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
