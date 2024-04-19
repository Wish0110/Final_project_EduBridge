import React from 'react';
import Sidebar from '../components/Sidebar';
import { NavLink } from 'react-router-dom';
import './form-css/ApplicationOverview.css';

const ApplicationOverview = () => {
  return (
    
    <Sidebar>
    <div className="card-container">

        <div className="card-row">

          <div className="card">
            <div className="card-content">
              <h3>Personal details</h3>
              <p>Name, age, title and gender.</p>
              </div>
              <div className="card-footer">
              <NavLink to="/PersonalDetails" className="start-button">Start this section 1</NavLink>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h4>Contact and Residency Details</h4>
              <p>Address, email, telephone and where you live.</p>
              </div>
              <div className="card-footer">
              <NavLink to="/Contactandresidencydetails" className="start-button">Start this section 2</NavLink>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h3>Nationality Details</h3>
              <p>Birthplace and nationalities.</p>
              </div>
              <div className="card-footer">
              <NavLink to="/NationalityDetails" className="start-button">Start this section 3</NavLink>
              </div>
            </div>

          </div>


        <div className="card-row">

          <div className="card">
            <div className="card-content">
              <h3>Supporting Information</h3>
              <p>So that providers know how to support you during your studies.</p>
              </div>
              <div className="card-footer">
              <NavLink to="/SupportingInformation" className="start-button">Start this section 4</NavLink>
              </div>
            </div>

          <div className="card">
            <div className="card-content">
              <h3>English Language Skills</h3>
              <p>Is English your first language?</p>
              </div>
              <div className="card-footer">
              <NavLink to="/EnglishLanguageSkills" className="start-button">Start this section 5</NavLink>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h3>Finance And Funding</h3>
              <p>Tell us how you’ll fund your study.</p>
              </div>
              <div className="card-footer">
              <NavLink to="/FinanceAndFunding" className="start-button">Start this section 6</NavLink>
              </div>
            </div>

          </div>

        <div className="card-row">

          <div className="card">
            <div className="card-content">
              <h3>Education</h3>
              <p>Qualifications and periods of study.</p>
              </div>
              <div className="card-footer">
              <NavLink to="/Education" className="start-button">Start this section 7</NavLink>
              </div>
            </div>

          <div className="card">
            <div className="card-content">
              <h3>Reccomandation Letter</h3>
              <p>This is card 8.</p>
              </div>
              <div className="card-footer">
              <NavLink to="/ReccomandationLetter" className="start-button">Start this section 8</NavLink>
              </div>
            </div>

          <div className="card">
            <div className="card-content">
              <h3>Employment</h3>
              <p>Paid employment.</p>
              </div>
              <div className="card-footer">
              <NavLink to="/Employment" className="start-button">Start this section 9</NavLink>
              </div>
            </div>

          </div>

        <div className="card-row">

          <div className="card">
            <div className="card-content">
              <h3>Personal statement</h3>
              <p>Why do you want to study this subject?</p>
              </div>
              <div className="card-footer">
              <NavLink to="/PersonalStatement" className="start-button">Start this section 10</NavLink>
              </div>
          </div>

        </div>
      </div>
    </Sidebar>

  );
}

export default ApplicationOverview;