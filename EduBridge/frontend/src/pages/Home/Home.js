import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MapChart from './MapChart';
import HomeBanner from './home_banner';
import './Home.css';
import Navbar from '../../Componenets/Navbar/Navbar';

const Home = () => {
  //Home navigations controll
  const homeRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = homeRef.current;
      const mapSection = mapRef.current;

      //home section scroll
      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          homeRef.current.classList.add("active");
        } else {
         homeRef.current.classList.remove("active");
        }
      }

      //map section scroll
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

    <section id="home">
    <div className="HomeContainer" ref={homeRef}>
      <h2>Home</h2>
      <HomeBanner />
    </div>
    </section>

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