/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './navbar.css';
import logo from './logo.png'; // Replace with your logo image path

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track currently active li index

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li
          className={activeIndex === 0 ? 'active' : ''}
          onClick={() => handleClick(0)}
        >
          <a href="#">Home</a>
        </li>
        <li
          className={activeIndex === 1 ? 'active' : ''}
          onClick={() => handleClick(1)}
        >
          <a href="#">About</a>
        </li>
        <li
          className={activeIndex === 2 ? 'active' : ''}
          onClick={() => handleClick(2)}
        >
          <a href="#">Services</a>
        </li>
        <li
          className={activeIndex === 3 ? 'active' : ''}
          onClick={() => handleClick(3)}
        >
          <a href="#">Contact</a>
        </li>
        <li
          className={activeIndex === 4 ? 'active' : ''}
          onClick={() => handleClick(4)}
        >
          <a href="#">More</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
