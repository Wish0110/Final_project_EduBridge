import React from 'react';
import './banner.css';
import img from './Home-Banner.png';

const HomeBanner = () => {
  return (
    <div className="banner">
      <div className="banner-text">
        <h1>Welcome to EduBridge</h1>
        <p>Your bridge to a successful university application in the UK.</p>
      </div>
      <div className="banner-image">
        <img src={img} alt="Poster" />
      </div>
    </div>
  );
};

export default HomeBanner;