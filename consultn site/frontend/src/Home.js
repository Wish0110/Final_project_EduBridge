import React from 'react';
import banner from './banner.png';
import Navbar from './navbar';
import MapPage from 'map.js';

const Home = () => {
  const navigateToMap = () => {
    // Assuming you have a routing library like React Router set up:
    window.location.href = "/map"; // Navigate to the map page using URL
  };

  return (
    <div className="home">
      <img src={banner} alt="Home Page Banner" className="banner" />
      <Navbar />
      <button className="map-button" onClick={MapPage}>
        Map
      </button>
    </div>
  );
};

export default Home;
