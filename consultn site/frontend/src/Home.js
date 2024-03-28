import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Map from './map';
import banner from './banner.png';
import Navbar from './navbar';
import MapButton from './MapButton';
import './App.css';

const Home = () => {
  return (
    <div className="home">
      <img src={banner} alt="Home Page Banner" className="banner" />
      <Navbar />
      <Routes>
        <Route path="/map" element={<Map />} />
        <Route exact path="/" element={<div>
          <MapButton />
        </div>} />
      </Routes>
    </div>
  );
};

export default Home;