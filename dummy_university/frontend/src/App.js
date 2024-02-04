import React from 'react';
import './App.css';
import logoNlearn from './images/Nlearn-logo.jfif';
import studentportal from './images/studentportal.png';
import logoPlymouthUsad from './images/plyuniversity-logo.jfif';
import logoVictoria from './images/victoria-university-logo.jfif';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NSBM Student Portal</h1>
        <nav>
          <div className="image-wrapper">
            <div className="image-box">
              <a href="#">
                <img src={logoNlearn} alt="University of Plymouth" />
                <span>University of Plymouth</span>
              </a>
            </div>
            <div className="image-box">
              <a href="#">
                <img src={logoPlymouthUsad} alt="Plymouth University" />
                <span>Plymouth University</span>
              </a>
            </div>
            <div className="image-box">
              <a href="#">
                <img src={logoVictoria} alt="Melbourne Australia Victoria University" />
                <span>Melbourne Australia Victoria University</span>
              </a>
            </div>
            <div className="image-box">
              <a href="#">
                <img src={studentportal} alt="USAD Test" />
                <span>USAD Test</span>
              </a>
            </div>
          </div>
        </nav>
        <main>
          <h2>Online Services for Students</h2>
          <ul>
            <li><a href="#">Learning Management Systems (LMS) & Examinations</a></li>
          </ul>
        </main>
      </header>
    </div>
  );
}

export default App;
