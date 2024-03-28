import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg">
      <a className="navbar-brand navbar-logo" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <li className={activeLink === "#" ? "nav-item active" : "nav-item"} onClick={() => handleLinkClick('#')}>
            <a className="nav-link" href="javascript:void(0);"><i className="fas fa-tachometer-alt"></i>Dashboard</a>
          </li>
          <li className={activeLink === "javascript:void(0);" ? "nav-item active" : "nav-item"} onClick={() => handleLinkClick("javascript:void(0);")}>
            <a className="nav-link" href="javascript:void(0);"><i className="far fa-address-book"></i>Address Book</a>
          </li>
          {/* Add more list items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;