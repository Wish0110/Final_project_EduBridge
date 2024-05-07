import React from 'react';
import './banner.css';
import img from './Home-Banner.png';
import logo1 from './home_banner_imgs/logo1.png';
import logo2 from './home_banner_imgs/logo2.png';
import logo3 from './home_banner_imgs/logo3.png';
import logo4 from './home_banner_imgs/logo4.jfif';
import logo5 from './home_banner_imgs/logo5.jfif';

const HomeBanner = () => {
  return (
    <div className="banner">
     
      <div className="banner-image">
        <img src={img} alt="Poster" />
      </div>

      <div className='banner-footer'>
      <div className="logo-container">
          <img src={logo1} alt="Logo 1" className="logo1"/>
          <img src={logo2} alt="Logo 2" className="logo2"/>
          <img src={logo3} alt="Logo 3" className="logo3"/>
          <img src={logo4} alt="Logo 4" className="logo4"/>
          <img src={logo5} alt="Logo 5" className="logo5"/>
        </div>
      </div>

      </div>
  );
};

export default HomeBanner;