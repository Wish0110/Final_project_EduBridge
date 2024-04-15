import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MapChart from './MapChart';
import banner from './banner.png';
import './Home.css';
import Navbar from '../../Componenets/Navbar/Navbar';

const Home = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const mapSection = document.getElementById("map");
      if (mapSection) {
        const rect = mapSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          mapRef.current.classList.add("active");
        } else {
          mapRef.current.classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='Navbar'>
    <Navbar />

    <div className="HomeContainer">
      *<img src={banner} alt="Home Page Banner" className="banner" />
    </div>

    <section id="map">
    <div className="map-chart-container" ref={mapRef}>
        <h2>UK University Map</h2>
        <MapChart />
      </div>
    </section>

    {/*chatbot*/}
    <Link to="/ChatBot">
    <div className="sticky-button">
      <button>Mocha</button>
    </div>
    </Link>

    </div>
  );
};


export default Home;