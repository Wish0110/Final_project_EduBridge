import React from "react";
import "./Contact.css"

const Contact = () => {

    return (
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section footer-section-logo">
              <h2>EduBridge</h2>
              <p>Bridge to a successful university application in the UK.</p>
            </div>
            <div className="footer-section footer-section-contact">
              <h3>Contact Us</h3>
              <p>123 Main Street, Anytown, UK</p>
              <p>Email: info@edubridge.co.uk</p>
              <p>Phone: +44 1234 567890</p>
            </div>
            <div className="footer-section footer-section-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            </ul>
          </div>
        </footer>
      );
    };

export default Contact;