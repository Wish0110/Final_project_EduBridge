import React, {useEffect} from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";
import logo from './logo.png';
import $ from 'jquery';

const Navbar = () => {


    function animation(){
        var tabsNewAnim = $('#navbarSupportedContent');
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        $(".hori-selector").css({
            top: itemPosNewAnimTop.top + "px", 
            left: itemPosNewAnimLeft.left + "px",
            height: activeWidthNewAnimHeight + "px",
            width: activeWidthNewAnimWidth + "px"
        });
        $("#navbarSupportedContent").on("click",".nav-item", function(e){
            $('#navbarSupportedContent ul .nav-item').removeClass("active");
            $(this).addClass('active');
            var activeWidthNewAnimHeight = $(this).innerHeight();
            var activeWidthNewAnimWidth = $(this).innerWidth();
            var itemPosNewAnimTop = $(this).position();
            var itemPosNewAnimLeft = $(this).position();
            $(".hori-selector").css({
                top: itemPosNewAnimTop.top + "px", 
                left: itemPosNewAnimLeft.left + "px",
                height: activeWidthNewAnimHeight + "px",
                width: activeWidthNewAnimWidth + "px"
            });
        });
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
    

    return (
        <nav className="navbar navbar-expand-lg navbar-mainbg">
        <img src={logo} alt="Logo" className="navbar-logo" />

        <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">

                    <div className="hori-selector">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>

                    <li className="nav-item active hidden">
                        <NavLink className="nav-link" to="/" exact>
                            <i 
                            className="fas
                            fa-tachometer-alt">
                            </i>Home
                        </NavLink>    
                    </li>  

                    <li className="nav-item hidden">
                        <NavLink className="nav-link" to="/About" exact>
                            <i 
                            className="fas
                            fa-address-book">
                            </i>About
                        </NavLink>    
                    </li>  

                    <li className="nav-item hidden">
                        <NavLink className="nav-link" to="/Service" exact>
                            <i 
                            className="far
                            fa-clone">
                            </i>Service
                        </NavLink>    
                    </li>  

                    <li className="nav-item hidden">
                        <NavLink className="nav-link" to="/Testimonial" exact>
                            <i 
                            className="far
                            fa-chart-bar">
                            </i>Map
                        </NavLink>    
                    </li>

                    <li className="nav-item hidden">
                        <NavLink className="nav-link" to="/Contact" exact>
                            <i 
                            className="far
                            fa-copy">
                            </i>Contact Us
                        </NavLink>    
                    </li>

                </ul>
        </div>
    </nav>    
    )
}
export default Navbar;