import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Map from './MapChart';
import banner from './banner.png';
import Navbar from './navbar';
import './App.css';

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className="home">
      <img src={banner} alt="Home Page Banner" className="banner" />
      <Navbar />
      <Routes>
        <Route path="/MapChart" element={<Map />} />
        <Route exact path="/" element={<div>

          <button className="map-button" onClick={() => navigate('/MapChart')}>
            Map
          </button>
        </div>} />
      </Routes>
    </div>
  );
};

export default Home;