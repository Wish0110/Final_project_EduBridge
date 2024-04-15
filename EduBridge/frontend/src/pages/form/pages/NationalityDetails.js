import React, { useState } from "react";
import Sidebar from '../components/Sidebar';
import './form-css/nationalityDetails.css';


const NationalityDetails = () => {
  const [birthCountry, setBirthCountry] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [nationality, setNationality] = useState('');

  const handleBirthCountryChange = (event) => {
    setBirthCountry(event.target.value);
  };

  const handleArrivalDateChange = (event) => {
    setArrivalDate(event.target.value);
  };

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

  return (
    <Sidebar>
    <form>
      <label htmlFor="birth-country">
        What is your country of birth? <br />
        For the purpose of this question the UK includes the Channel Islands and the Isle of Man.
      </label>
      <select id="birth-country" value={birthCountry} onChange={handleBirthCountryChange}>
        <option value="">Select a country</option>
        <option value="sri-lanka">Sri Lanka</option>
        {/* Add more country options here */}
      </select>

      <label htmlFor="arrival-date">
        Please tell us your date of first entry to UK <br />
        If you already live in the UK, this should be the date you moved here. If you have never lived in the UK before, please enter the date you plan to arrive to start a course.
      </label>
      <input type="date" id="arrival-date" value={arrivalDate} onChange={handleArrivalDateChange} />

      <label htmlFor="nationality">
        What is your nationality? <br />
        If you're applying from outside the UK choose your nationality as it appears in your passport. If you have dual nationality and you need a visa to enter the UK, enter your first nationality as it is shown on the passport you intend to use when travelling to the UK for your course.
      </label>
      <select id="nationality" value={nationality} onChange={handleNationalityChange}>
        <option value="">Select a nationality</option>
        <option value="sri-lankan">Sri Lankan</option>
        {/* Add more nationality options here */}
      </select>
    </form>
    </Sidebar>
  );
}

export default NationalityDetails;