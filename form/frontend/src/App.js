import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import PersonalDetails from './pages/PersonalDetails';
import Contactandresidencydetails from './pages/Contactandresidencydetails';
import NationalityDetails from './pages/NationalityDetails';
import SupportingInformation from './pages/SupportingInformation';
import EnglishLanguageSkills from './pages/EnglishLanguageSkills';
import FinanceAndFunding from './pages/FinanceAndFunding';
import Education from './pages/Education';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/PersonalDetails" element={<PersonalDetails />} />
          <Route path="/Contactandresidencydetails" element={<Contactandresidencydetails />} />
          <Route path="/NationalityDetails" element={<NationalityDetails />} />
          <Route path="/SupportingInformation" element={<SupportingInformation />} />
          <Route path="/EnglishLanguageSkills" element={<EnglishLanguageSkills />} />
          <Route path="/FinanceAndFunding" element={<FinanceAndFunding />} />
          <Route path="/Education" element={<Education />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;