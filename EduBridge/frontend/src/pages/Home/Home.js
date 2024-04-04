import React from 'react';
import MapChart from './MapChart';
//import banner from './banner.png';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      {/*<img src={banner} alt="Home Page Banner" className="banner" />*/}
      <div className="map-chart-container">
        <h2>UK University Map</h2>
        <MapChart />
      </div>
    </div>
  );
};

export default Home;