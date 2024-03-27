// Home.js
import React from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import './App.css';
import Map from './map';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <img src="abanner.png" alt="Home Page Banner" className="banner" />
      <Navbar />
      <Routes>
        <Route exact path="/" element={
          <div>
            <button className="map-button" onClick={() => navigate('/map')}>
              Map
            </button>
          </div>
        } />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
};

export default Home;