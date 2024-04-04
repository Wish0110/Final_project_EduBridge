import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Service from './pages/Service/Service';
import Testmonial from './pages/Testmonial/Testmonial'; 
import Navbar from './Componenets/Navbar/Navbar';
import PlymouthUnivesity from './pages/Universities/PlymouthUnivesity'; 
import CourseDetailsPU from './pages/CourseDetails/CourseDetailsPU';
import DegreeList from './pages/degreeList/DegreeList';
import Form from './pages/form/Form';

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
       <Route path="/PlymouthUnivesity" exact element={<PlymouthUnivesity />} />
       <Route path="/DegreeList" exact element={<DegreeList />} />
        <Route path="/CourseDetailsPU" exact element={<CourseDetailsPU />} />
        <Route path="/Form" exact element={<Form />} />
        
    </Routes>
      </main>
    </Router>
  );
};

export default App;
