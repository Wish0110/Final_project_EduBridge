import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './Home';
import Service from './pages/Service/Service';
import Testmonial from './pages/Testmonial/Testmonial'; 
import Navbar from './Componenets/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <main>
      <Routes>
        <Route path="/" exact 
          element={<Home />} />
        <Route path="/About" exact 
          element={<About />} />
        <Route path="/Contact" exact 
          element={<Contact />} />
        <Route path="/Service" exact 
          element={<Service />} />
        <Route path="/Tesmonial" exact 
          element={<Testmonial />} />
    </Routes>
          
      </main>
    </Router>
  );
};

export default App;
