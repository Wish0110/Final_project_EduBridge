import React from 'react';
import './banner.css';
import img from './Home-Banner.png';

const HomeBanner = () => {
  return (
    <div className="banner">
     
      <div className="banner-image">
        <img src={img} alt="Poster" />
      </div>

      <div className='banner-footer'>

      </div>
      
      </div>
  );
};

export default HomeBanner;