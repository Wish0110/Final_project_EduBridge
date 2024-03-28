import React from 'react';
import { Route, Routes } from 'react-router-dom';
import banner from './banner.png';
import Navbar from './navbar';
import './App.css';

const Home = () => {
  return (
    <div className="home">
      <img src={banner} alt="Home Page Banner" className="banner" />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<div>
        </div>} />
      </Routes>
    </div>
  );
};

export default Home;