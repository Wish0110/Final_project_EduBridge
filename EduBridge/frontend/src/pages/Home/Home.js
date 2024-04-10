import React from 'react';
import MapChart from './MapChart';
//import banner from './banner.png';
import Navbar from '../../Componenets/Navbar/Navbar';
import './Home.css';

const Home = () => {
  return (
    <div>
    <Navbar />
    <div className="HomeContainer">
      {/*<img src={banner} alt="Home Page Banner" className="banner" />*/}
      <div className="map-chart-container">
        <h2>UK University Map</h2>
        <MapChart />
      </div>
    </div>
    </div>
  );
};

export default Home;