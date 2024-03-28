/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState(null);

  const handleActive = (e) => {
    setActive(e.target.id);
  };

  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg">
      <a className="navbar-brand navbar-logo" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <li
            id="dashboard"
            className={`nav-item ${active === 'dashboard' && 'active'}`}
            onClick={handleActive}
          >
            <a className="nav-link" href="javascript:void(0);">
              <i className="fas fa-tachometer-alt"></i>Dashboard
            </a>
          </li>
          <li
            id="address-book"
            className={`nav-item ${active === 'address-book' && 'active'}`}
            onClick={handleActive}
          >
            <a className="nav-link" href="javascript:void(0);">
              <i className="far fa-address-book"></i>Address Book
            </a>
          </li>
          <li
            id="components"
            className={`nav-item ${active === 'components' && 'active'}`}
            onClick={handleActive}
          >
            <a className="nav-link" href="javascript:void(0);">
              <i className="far fa-clone"></i>Components
           </a>
          </li>
          <li
            id="calendar"
            className={`nav-item ${active === 'calendar' && 'active'}`}
            onClick={handleActive}
          >
            <a className="nav-link" href="javascript:void(0);">
              <i className="far fa-calendar-alt"></i>Calendar
            </a>
          </li>
          <li
            id="charts"
            className={`nav-item ${active === 'charts' && 'active'}`}
            onClick={handleActive}
          >
            <a className="nav-link" href="javascript:void(0);">
              <i className="far fa-chart-bar"></i>Charts
            </a>
          </li>
          <li
            id="documents"
            className={`nav-item ${active === 'documents' && 'active'}`}
            onClick={handleActive}
          >
            <a className="nav-link" href="javascript:void(0);">
              <i className="far fa-copy"></i>Documents
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;