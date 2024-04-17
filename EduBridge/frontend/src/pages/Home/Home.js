import React, { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css'; // Include CSS for styling
import { Link } from 'react-router-dom';
import MapChart from './MapChart';
import HomeBanner from './home_banner';
import './Home.css';
import Navbar from '../../Componenets/Navbar/Navbar';
import About from '../About/About';

const Home = () => {
  //Home navigations controll
  const homeRef = useRef(null);
  const mapRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = homeRef.current;
      const mapSection = mapRef.current;
      const aboutSection = aboutRef.current;

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

      //about section scroll
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          aboutRef.current.classList.add("active");
        } else {
          aboutRef.current.classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (

    //navbar
    <div className='Navbar'>
    <Navbar />

    {/*home*/}   
    <section id="home">
    <div className="HomeContainer" ref={homeRef}>
      <HomeBanner />
    </div>
    </section>

    {/*map*/}
    <section id="map" className="map-section">
    <div className="map-chart-container" ref={mapRef}>
        <h2>UK University Map</h2>
        <MapChart />
      </div>
    </section>

    {/*about*/}
    <section id="about" className="about-section">
    <div className="about-container" ref={aboutRef}>
        <h2>About</h2>
        <About />
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