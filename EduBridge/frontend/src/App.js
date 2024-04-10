import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Service from './pages/Service/Service';
import Testmonial from './pages/Testmonial/Testmonial'; 
import PlymouthUnivesity from './pages/Universities/PlymouthUnivesity'; 
import CourseDetailsPU from './pages/CourseDetails/CourseDetailsPU';
import DegreeList from './pages/degreeList/DegreeList';
import Form from './pages/form/Form';
import ApplicationOverview from './pages/form/pages/ApplicationOverview';
import PersonalDetails from './pages/form/pages/PersonalDetails';
import Contactandresidencydetails from './pages/form/pages/Contactandresidencydetails';
import NationalityDetails from './pages/form/pages/NationalityDetails';
import SupportingInformation from './pages/form/pages/SupportingInformation';
import EnglishLanguageSkills from './pages/form/pages/EnglishLanguageSkills';
import FinanceAndFunding from './pages/form/pages/FinanceAndFunding';
import Education from './pages/form/pages/Education';
import Employment from './pages/form/pages/Employment';
import PersonalStatement from './pages/form/pages/PersonalStatement';
import ReccomandationLetter from './pages/form/pages/ReccomandationLetter/ReccomandationLetter';
import ChatBot from './pages/Home/ChatBot/frontend/ChatBot';

const App = () => {
  return (
    <Router> 
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
        <Route path="/Testmonial" exact 
          element={<Testmonial />} />  
       <Route path="/PlymouthUnivesity" exact element={<PlymouthUnivesity />} />
       <Route path="/DegreeList" exact element={<DegreeList />} />
        <Route path="/CourseDetailsPU" exact element={<CourseDetailsPU />} />
        <Route path="/Form" exact element={<Form />} />
        <Route path="/ApplicationOverview" exact element={<ApplicationOverview />} />
        <Route path="/PersonalDetails" exact element={<PersonalDetails />} /> 
        <Route path="/Contactandresidencydetails" exact element={<Contactandresidencydetails />} />
        <Route path="/NationalityDetails" exact element={<NationalityDetails />} />
        <Route path="/SupportingInformation" exact element={<SupportingInformation />} />
        <Route path="/EnglishLanguageSkills" exact element={<EnglishLanguageSkills />} />
        <Route path="/FinanceAndFunding" exact element={<FinanceAndFunding />} />
        <Route path="/Education" exact element={<Education />} />
        <Route path="/Employment" exact element={<Employment />} />
        <Route path="/PersonalStatement" exact element={<PersonalStatement />} />
        <Route path="/ReccomandationLetter" exact element={<ReccomandationLetter />} />
        <Route path="/ChatBot" exact element={<ChatBot />} />
    </Routes>
      </main>
    </Router>
  );
};

export default App;
