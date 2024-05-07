import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css'; 
import MapChart from './MapChart';
import HomeBanner from './home_banner';
import './Home.css';
import Navbar from '../../Componenets/Navbar/Navbar';
import About from '../About/About';
import Service from '../Service/Service';
import Contact from '../Contact/Contact';
import searchpage from './home_banner_imgs/HomeUniSearch.png';
import locations from './home_banner_imgs/locations.gif';
import botgif from './home_banner_imgs/botgif.gif';

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
    <h2>UK Universities <span className="map-text">Map</span></h2>
        <div className="divider"></div>
        <MapChart />
      
        <div className='PopUp'>
        <Link to="/universitiesinuk">
            <div className="text-overlay">
                <p>Click Here to Search universities</p>
              </div> 
        <img src={searchpage} alt="Universities in the UK" className="Homesearchimage" />
        </Link>
        <div className='searchPageInstruct'>
        <h3>How to use the MAP section:</h3>
            <p>
              In the MAP section, you can explore the UK universities on the map. 
              Click on a university marker to view more details about the university. 
              You can also use the search bar at the top of the page to search for a specific university.
            </p>
            <img
            src={locations}
            alt="locations"
            className="locations-gif"
          />
        </div>
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
          <img
            src={botgif}
            alt="Mocha"
            className="mocha-gif"
          />
        </div>
      </Link>

    </div>
  );
};


export default Home;