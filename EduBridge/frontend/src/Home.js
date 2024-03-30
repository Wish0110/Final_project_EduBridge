import React from 'react';
import MapChart from './MapChart';
import banner from './banner.png';
import './App.css';

const Home = () => {
  return (
    <div className="container">

      <img src={banner} alt="Home Page Banner" className="banner" />

      <h2>UK University Map</h2>
      <MapChart />
    </div>
  );
};

export default Home;