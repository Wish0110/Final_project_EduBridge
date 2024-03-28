import React from 'react';
import logo from './logo.png'; // Replace with your logo image path

const avbar = () => {
  return (
    <nav className="navbar sticky-top bg-blur">
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

// Add the following CSS to your file
const navbarStyles = {
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  position: 'sticky',
  top: 0,
  zIndex: 100,
  transition: 'all 0.3s ease',
}

const Navbar = () => {
  return (
    <nav className="navbar" style={navbarStyles}>
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