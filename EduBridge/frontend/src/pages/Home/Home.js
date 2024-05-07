import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css'; 
import MapChart from './MapChart';
import HomeBanner from './home_banner';
import './Home.css';
import Navbar from '../../Componenets/Navbar/Navbar';
import About from '../About/About';
import Service from '../Service/Service';
import Contact from '../Contact/Contact';
import SearchBar from './SearchBar';

const Home = () => {
  //navigations controll in pages
  const homeRef = useRef(null);
  const mapRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);
  

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = homeRef.current;
      const mapSection = mapRef.current;
      const aboutSection = aboutRef.current;
      const serviceSection = serviceRef.current;
      const contactSection = contactRef.current;

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

      //about section scroll
      if (serviceSection) {
        const rect = serviceSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          serviceRef.current.classList.add("active");
        } else {
          serviceRef.current.classList.remove("active");
        }
      }

      //contact section scroll
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          contactRef.current.classList.add("active");
        } else {
          contactRef.current.classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [searchedOptions, setSearchedOptions] = useState([]);
  const handleSearch = (searchTerm) => {
    const matchingOptions = ['University', 'Cambridge Collage', 'Oxford University'].filter(
      (option) => option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchedOptions(matchingOptions);
  };


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
    <div ref={mapRef}>
    <h2>UK <span className="map-text">Map</span></h2>
        <div className="divider"></div>
        <MapChart />
      <div className="search-bar">
      <SearchBar onSearch={handleSearch} className= 'options' options={['Plymouth University', 'Cambridge Collage', 'Oxford University']} />

        </div>
        
      </div>
    </section>

    {/*about*/}
    <section id="about" className="about-section">
    <div className="about-container" ref={aboutRef}>
        <h2>About</h2>
        <About />
      </div>
    </section>

    {/*Service*/}
    <section id="service" className="service-section">
    <div className="service-container" ref={serviceRef}>
        <h2>Service</h2>
        <Service />
      </div>
    </section>

    {/*contact*/}
    <section id="contact" className="contact-section">
    <div className="contact-container" ref={contactRef}>
        <Contact />
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