import React from 'react';
import './App.css';
import logoPlymouth from './images/plymouth-university-logo.png';
import logoBard from './images/bard-university-logo.png';
import studentportal from './images/studentportal.png';
import logoPlymouthUsad from './images/plymouth-usad-logo.png';
import logoVictoria from './images/victoria-university-logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NSBM Student Portal</h1>
        <nav>
          <ul>
            <li>
              <a href="#">
                <img src={logoPlymouth} alt="University of Plymouth" />
                <span>University of Plymouth</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={logoPlymouthUsad} alt="Plymouth University" />
                <span>Plymouth University</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={logoBard} alt="Bard Victoria University" />
                <span>Bard Victoria University</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={logoVictoria} alt="Melbourne Australia Victoria University" />
                <span>Melbourne Australia Victoria University</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={studentportal} alt="USAD Test" />
                <span>USAD Test</span>
              </a>
            </li>
          </ul>
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