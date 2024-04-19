import React, {useEffect} from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import logo from './logo.png';
import $ from 'jquery';

const Navbar = () => {
    function animation() {
      const tabsNewAnim = $("#navbarSupportedContent");
      const activeItemNewAnim = tabsNewAnim.find(".active");
  
      if (activeItemNewAnim.length) {
        const activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        const itemPosNewAnimTop = activeItemNewAnim.position();
        const itemPosNewAnimLeft = activeItemNewAnim.position();
  
        $(".hori-selector").css({
          top: itemPosNewAnimTop.top + "px",
          left: itemPosNewAnimLeft.left + "px",
          height: activeWidthNewAnimHeight + "px",
          width: activeWidthNewAnimWidth + "px"
        });
  
        $("#navbarSupportedContent").on("click", ".nav-item", function(e) {
          const navItems = $("#navbarSupportedContent ul .nav-item");
          navItems.removeClass("active");
          $(this).addClass("active");
  
          if ($(this).length) {
            const activeWidthNewAnimHeight = $(this).innerHeight();
            const activeWidthNewAnimWidth = $(this).innerWidth();
            const itemPosNewAnimTop = $(this).position();
            const itemPosNewAnimLeft = $(this).position();
  
            $(".hori-selector").css({
              top: itemPosNewAnimTop.top + "px",
              left: itemPosNewAnimLeft.left + "px",
              height: activeWidthNewAnimHeight + "px",
              width: activeWidthNewAnimWidth + "px"
            });
          }
        });
      }
    }

    useEffect(() => {
        animation();
    
        $(window).on('resize', function() {
            setTimeout(function() { animation(); }, 500);
        });
    
        // New code for loading animation
        setTimeout(() => {
            $('.navbar-brand').removeClass('hidden'); // Start with logo
            setTimeout(() => {
                $('.nav-item').removeClass('hidden'); // Then list items
            }, 100); // Delay between logo and list items
        }, 400); // Delay before starting animation
    
    }, []);
    
    //home navigation
    const handleHomeClick = () => {
        const homeSection = document.getElementById("home");
        if (homeSection) {
          homeSection.scrollIntoView({ behavior: "smooth" });
        }
      };

    //map navigation
    const handleMapClick = () => {
        const mapSection = document.getElementById("map");
        if (mapSection) {
          mapSection.scrollIntoView({ behavior: "smooth" });
        }
      };

      //about navigation
    const handleAboutClick = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      };

      //service navigation
    const handleServiceClick = () => {
        const serviceSection = document.getElementById("service");
        if (serviceSection) {
            serviceSection.scrollIntoView({ behavior: "smooth" });
        }
      };

      //service navigation
    const handleContactClick = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
      };

    return (
        <nav className="navbar navbar-expand-lg navbar-mainbg ">
        <img src={logo} alt="Logo" className="navbar-logo" />

        <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">

                    <div className="hori-selector">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>

                    {/*Home*/}
                    <li className="nav-item active hidden">
                        <Link className="nav-link" to="#home" exact
                        onClick={handleHomeClick}
                        >
                            <i 
                            className="fas
                            fa-tachometer-alt">
                            </i>Home
                        </Link>    
                    </li>  

                    {/*Map*/}
                    <li className="nav-item">
                        <Link
                        className="nav-link" to="#map" exact
                        onClick={handleMapClick}
                        >
                        <i className="far fa-chart-bar"></i>Map
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link
                        className="nav-link" to="#about" exact
                        onClick={handleAboutClick}
                        >
                        <i className="fas fa-address-book"></i>About
                        </Link>    
                    </li>  

                    <li className="nav-item">
                        <Link className="nav-link" to="#service" exact
                        onClick={handleServiceClick}
                        >
                            <i 
                            className="far
                            fa-clone">
                            </i>Service
                        </Link>    
                    </li> 

                    <li className="nav-item">
                        <Link className="nav-link" to="#contact" exact
                        onClick={handleContactClick}
                        >
                            <i 
                            className="far
                            fa-clone">
                            </i>Contact
                        </Link>    
                    </li>  

                </ul>
        </div>
    </nav>    
    )
}
export default Navbar;