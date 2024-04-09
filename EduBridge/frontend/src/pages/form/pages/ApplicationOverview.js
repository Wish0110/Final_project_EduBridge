import React from 'react';
import Sidebar from '../components/Sidebar';
import './ApplicationOverview.css';

const ApplicationOverview = () => {
  return (
    <Sidebar>
    <div className="card-container">
        <div className="card-row">
          <div className="card">
            <div className="card-content">
              <h3>Personal details</h3>
              <p>Name, age, title and gender.</p>
              <button className="start-button">Start this section</button>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
            <div className='left-card'>
              <h3>Contact and Residency Details</h3>
              <p>Address, email, telephone and where you live.</p>
              <button className="start-button">Start this section</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>Nationality Details</h3>
              <p>Birthplace and nationalities.</p>
              <button className="start-button">Start this section</button>
            </div>
          </div>
        </div>
        <div className="card-row">
          <div className="card">
            <div className="card-content">
              <h3>Supporting Information</h3>
              <p>So that providers know how to support you during your studies.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
            <div className='left-card'>
              <h3>English Language Skills</h3>
              </div>
              <p>Is English your first language?</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>Finance And Funding</h3>
              <p>Tell us how you’ll fund your study.</p>
            </div>
          </div>
        </div>
        <div className="card-row">
          <div className="card">
            <div className="card-content">
              <h3>Education</h3>
              <p>Qualifications and periods of study.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>Reccomandation Letter</h3>
              <p>This is card 8.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>Employment</h3>
              <p>Paid employment.</p>
            </div>
          </div>
        </div>
        <div className="card-row">
          <div className="card">
            <div className="card-content">
              <h3>Personal statement</h3>
              <p>Why do you want to study this subject?</p>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}

export default ApplicationOverview;