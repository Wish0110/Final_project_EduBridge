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
          <table>
            <tbody>
              <tr>
                <td>
                  <a href="#">
                    <img src={logoNlearn} alt="University of Plymouth" />
                    <span>University of Plymouth</span>
                  </a>
                </td>
                <td>
                  <a href="#">
                    <img src={logoPlymouthUsad} alt="Plymouth University" />
                    <span>Plymouth University</span>
                  </a>
                </td>
                <td>
                  <a href="#">
                    <img src={logoVictoria} alt="Melbourne Australia Victoria University" />
                    <span>Melbourne Australia Victoria University</span>
                  </a>
                </td>
                <td>
                  <a href="#">
                    <img src={studentportal} alt="USAD Test" />
                    <span>USAD Test</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
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
