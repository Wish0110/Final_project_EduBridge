import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import for navigation

const Navbar = () => {
  const [isActive, setIsActive] = useState(false); // State for mobile menu toggle

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  // Function to add active class on page load based on current path
  useEffect(() => {
    const currentPath = window.location.pathname.split('/').pop();

    const targetLink = document.querySelector(
      `#navbarSupportedContent ul li a[href="${currentPath}"]`
    );

    if (targetLink) {
      targetLink.parentElement.classList.add('active');
    }
  }, []); // Empty dependency array to run only once on component mount

  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg">
      <Link className="navbar-brand navbar-logo" to="#">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded={isActive ? 'true' : 'false'}
        aria-label="Toggle navigation"
        onClick={handleToggle}
      >
        <i className="fas fa-bars text-white"></i>
      </button>

      <div
        className={`collapse navbar-collapse ${isActive ? 'show' : ''}`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/address-book">
              <i className="far fa-address-book"></i> Address Book
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/components">
              <i className="far fa-clone"></i> Components
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/calendar">
              <i className="far fa-calendar-alt"></i> Calendar
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/charts">
              <i className="far fa-chart-bar"></i> Charts
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/documents">
              <i className="far fa-copy"></i> Documents
            </Link>
          </li>
        </ul>
      </div>
      <div className="hori-selector">
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </nav>
  );
};

export default Navbar;
