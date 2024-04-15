import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './form-css/Employment.css';

const Employment = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  }


  return (
    <Sidebar>
      <div>
        <h2>Employment</h2>
        <button onClick={() => setPopupOpen(true)}>Add employment</button>
        {isPopupOpen && (
          <div className="popup">
            <div className="popup-content">
              <h3>Add Employment</h3>
              <form onSubmit={handleSubmit}>
                <label htmlFor="companyName">Company/organisation name</label>
                <input type="text" id="companyName" name="companyName" required />

                <label htmlFor="roleTitle">Role title</label>
                <input type="text" id="roleTitle" name="roleTitle" required />

                <label htmlFor="companyAddress">Company/organisation address</label>
                <input type="text" id="companyAddress" name="companyAddress" required />

                <label htmlFor="startDate">Start date</label>
                <select id="startDateMonth" name="startDateMonth">
                    <option value="">--</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                  <select id="startDateYear" name="startDateYear">
                    <option value="">--</option>
                    {Array.from({ length: 24 }, (_, i) => 2000 + i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>

                <label htmlFor="finishDate">Finish date</label>
                <select id="finishDateMonth" name="finishDateMonth">
                <option value="">--</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <select id="finishDateMonth" name="finishDateMonth">
                <option value="">--</option>
                    {Array.from({ length: 24 }, (_, i) => 2000 + i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                </select>
                <label htmlFor="employmentType">Was/is your position full time or part time?</label>
                <label htmlFor="fullTime">
                  <input type="radio" id="fullTime" name="employmentType" value="fullTime" required />
                  Full time
                </label>
                <label htmlFor="partTime">
                  <input type="radio" id="partTime" name="employmentType" value="partTime" />
                  Part time
                </label>

                <button onClick={() => setPopupOpen(false)} type="submit">Submit</button>
              </form>
              <button onClick={() => setPopupOpen(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </Sidebar>
  );
}

export default Employment;