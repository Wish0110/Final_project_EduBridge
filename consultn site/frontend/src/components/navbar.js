import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scroll ? 'scroll' : ''}`}>
      <div className="navbar-left">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="navbar-logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/home" className="navbar-button">
          Home
        </Link>
        <Link to="/about" className="navbar-button">
          About
        </Link>
        <Link to="/service" className="navbar-button">
          Service
        </Link>
        <Link to="/help" className="navbar-button">
          Help
        </Link>
      </div>
    </div>
  );
};

export default Navbar;