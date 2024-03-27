import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Map from './map';
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
        <Route path="/map" element={<Map />} />
        <Route exact path="/" element={<div>

          <button className="map-button" onClick={() => navigate('/map')}>
            Map
          </button>
        </div>} />
      </Routes>
    </div>
  );
};

export default Home;