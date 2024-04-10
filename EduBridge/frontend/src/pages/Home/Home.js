import React from 'react';
import { Link } from 'react-router-dom';
import MapChart from './MapChart';
//import banner from './banner.png';
import './Home.css';
import Navbar from '../../Componenets/Navbar/Navbar';

const Home = () => {
  return (

    <div className='Navbar'>
    <Navbar />

    <div className="HomeContainer">

      {/*<img src={banner} alt="Home Page Banner" className="banner" />*/}
      <div className="map-chart-container">
        <h2>UK University Map</h2>
        <MapChart />
      </div>

    {/*chatbot*/}
    <Link to="/ChatBot">
    <div className="sticky-button">
         <button>Mocha</button>
    </div>
    </Link>

    </div>
    </div>
  );
};


export default Home;