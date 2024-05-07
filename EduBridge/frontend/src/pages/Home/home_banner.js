import React from 'react';
import './banner.css';
import img from './Home-Banner.png';
import logo1 from './logo1.png';
import logo2 from './logo2.png';
import logo3 from './logo3.png';
import logo4 from './logo4.png';
import logo5 from './logo5.png';

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