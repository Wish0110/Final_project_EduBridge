import React from 'react';
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
    <div className="sticky-button">
         <button>Button</button>
    </div>

    </div>
    </div>
  );
};

export default Home;