import React from 'react';
import MapChart from './MapChart';
import banner from './banner.png';
import Navbar from './Componenets/Navbar/Navbar';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <header style={{ textAlign: 'center', marginBottom: '1rem' }}>
      <img src={banner} alt="Home Page Banner" className="banner" />
      </header>
      <h2>UK University Map</h2>
      <MapChart />
    </div>
  );
};

export default App;