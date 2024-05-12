import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import congrats from './form-imgs/celebration.webp';

const SubmissionComplete = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleApplicationFeeClick = () => {
    window.location.href = 'http://localhost:4000';
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };


  return (
    <Sidebar>
      <div>
        <label>
          <h1>After completing all the application steps, proceed to pay the <br /> application fee</h1><br />
          <span style={{ display: 'block', marginBottom: '10px', fontSize: '15px', marginLeft: '200px' }}>
            <h4>Please check the box after you have made the payment.<br /> 
            If you do not make the payment, your application will not be approved by the university</h4>
            </span>
            
          <span style={{ alignItems: 'center' }}>
            
            <button
              type="button"
              style={{ marginRight: '50px' }}
              onClick={handleApplicationFeeClick}
              disabled={isChecked}
            >
              Application Fee
            </button>
            <input
              type="checkbox"
              style={{ transform: 'scale(1.5)', marginLeft: '350px' }}
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </span>
          {isChecked && ( // Display the "Submit All Applications" button when isChecked is true
            <button type="button"
            style={{ 
                marginRight: '50px', 
                marginTop: '80px',
                width: '600px',
            }}
            onClick={() => setShowPopup(true)}>
                Submit All Applications</button>
          )}
        </label>

        {/* Popup */}
        {showPopup && (
          <div style={{
            position: 'fixed',
            top: '35%',
            left: '64%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            zIndex: 1000,
            padding: '40px 40px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            
            <h2 
            style={{marginBottom: '30px'}}
            >
                Congratulations!!!
            </h2>
            <div><img src={congrats} alt="Image description" style={{ height: '200px', width: '300px' }} /></div>
            <p
            style={{marginBottom: '50px',
            textAlign: 'center',
            fontSize: '20px'
            }}
            >
                Your application has been submitted successfully. Pay attention to the emails you receive. The university will inform you about your application.</p>
           
            <button className='popupHomeBtn'
            style={{
                padding: '20px 80px',
                marginRight: '220px',
                textDecoration: 'none', 
            cursor: 'pointer',
            width: '300px',
            borderRadius: '10px',
            }}
            >
                <Link to="/"> 
                <h3
                style={{
                    
                    color: 'white',
                    textDecoration: 'none',
                }}
                >Back to Home</h3>
                </Link>
                </button>
          </div>
        )}
      </div>
    </Sidebar>
  );
};

export default SubmissionComplete;