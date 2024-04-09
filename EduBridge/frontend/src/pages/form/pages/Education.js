import React from 'react';
import Sidebar from '../components/Sidebar';

const Education = () => {
  return (
    <div className="education-container">
      <Sidebar> {/* Add the Sidebar component */}
        <div className="education-content">
          <h2>Education</h2>
          {/* Add education details here */}
        </div>
      </Sidebar>
    </div>
  );
}

export default Education;
