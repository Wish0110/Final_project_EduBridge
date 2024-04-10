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
              </div>
              <div className="card-footer">
              <button className="start-button">Start this section 1</button>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h4>Contact and Residency Details</h4>
              <p>Address, email, telephone and where you live.</p>
              </div>
              <div className="card-footer">
              <button className="start-button">Start this section 2</button>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h3>Nationality Details</h3>
              <p>Birthplace and nationalities.</p>
              </div>
              <div className="card-footer">
              <button className="start-button">Start this section 3</button>
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
              <button className="start-button">Start this section 4</button>
              </div>
            </div>

          <div className="card">
            <div className="card-content">
              <h3>English Language Skills</h3>
              <p>Is English your first language?</p>
              </div>
              <div className="card-footer">
              <button className="start-button">Start this section 5</button>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h3>Finance And Funding</h3>
              <p>Tell us how you’ll fund your study.</p>
              </div>
              <div className="card-footer">
              <button className="start-button">Start this section 6</button>
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
              <button className="start-button">Start this section 7</button>
              </div>
            </div>

          <div className="card">
            <div className="card-content">
              <h3>Reccomandation Letter</h3>
              <p>This is card 8.</p>
              </div>
              <div className="card-footer">
              <button className="start-button">Start this section 8</button>
              </div>
            </div>

          <div className="card">
            <div className="card-content">
              <h3>Employment</h3>
              <p>Paid employment.</p>
              </div>
              <div className="card-footer">
              <button className="start-button">Start this section 9</button>
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
              <button className="start-button">Start this section 10</button>
              </div>
          </div>

        </div>
      </div>
    </Sidebar>
  );
}

export default ApplicationOverview;