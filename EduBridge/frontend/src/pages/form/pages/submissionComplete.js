import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const SubmissionComplete = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [hasPaidFee, setHasPaidFee] = useState(false); // Add a new state variable to track whether the user has paid the fee

  const handleApplicationFeeClick = () => {
    window.location.href = 'http://localhost:4000';
    setHasPaidFee(true); // Set hasPaidFee to true when the user clicks the "Application Fee" button
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Sidebar>
      <div>
        <label>
          <h1>After completing all the application steps, proceed to pay the <br /> application fee</h1><br />
        </label>
        <div>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <button
            type="button"
            onClick={handleApplicationFeeClick}
            disabled={isChecked}
          >
            Application Fee
          </button>
          {isChecked && hasPaidFee && ( // Display the "Submit All Applications" button when isChecked and hasPaidFee are true
            <button type="button">Submit All Applications</button>
          )}
        </div>
      </div>
    </Sidebar>
  );
};

export default SubmissionComplete;