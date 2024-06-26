import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import './form-css/Contactandresidencydetails.css'

const Contactandresidencydetails = () => {

  const [studentId, setStudentId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sectionComplete, setSectionComplete] = useState(false);
  const [contactDetails, setContactDetails] = useState({
    mobileNumber: '',
    email: '',
    addressType: 'Non-UK address',
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    addressLine4: '',
    country: 'Srilanka',
    nominatedAccess: false,
    nomineeName: '',
    nomineeRelation: '',
    nomineeAddressSame: true,
    nomineeHomeAddress: '',
    nomineeAddressType: '',
    nomineeResidentialCategory: '',
  });
  const [studentData, setStudentData] = useState({
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    addressLine4: '',
    teleNumber: '',
    Email: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:3004/api/fetch-student', { studentId });

      if (response.data.success) {
        console.log(response.data.data);
        setStudentData(response.data.data);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Error fetching student data:', error);
    }finally {
    setIsLoading(false);
    setSectionComplete(true);
    }
  };
  
  const handleInputChange = (e) => {
    setContactDetails({
      ...contactDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleRadioChange = (e) => {
    setContactDetails({
      ...contactDetails,
      nominatedAccess: e.target.value === 'Yes',
    });
  };

  /*const handleCheckboxChange = (e) => {
    setContactDetails({
      ...contactDetails,
      nomineeAddressSame: e.target.checked,
    });
  };*/

   /*
  const handleFormSubmission = async () => {
    // Create a new student object to store in the database
    const newStudent = {
      studentId,
      ...studentData
    };

   try {
      // Make a POST request to your MongoDB API to store the data
      const response = await axios.post('http://localhost:3006/api/store-student', newStudent);

      if (response.data.success) {
        console.log('Student data stored successfully!');
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Error storing student data:', error);
    }
  };*/

  

  return (
    <Sidebar>
        <form onSubmit={handleSubmit}>
      <h2>Contact details</h2>

      <label>
            Student ID:
            <input type="text" value={studentId} onChange={(event) => setStudentId(event.target.value)} />
          </label>
          <button type="submit" disabled={isLoading}> 
            {isLoading ? 'Loading...' : 'Submit'}
          </button>

      {/*Mobile telephone number*/}
      {studentData && Object.keys(studentData).length > 0 && ( // Check for valid data
      <div>
      <label>
        Mobile telephone number:
        <select name="mobileNumber" value={contactDetails.mobileNumber} onChange={handleInputChange}>
          <option value="+94">Srilanka (+94)</option>
          <option value="other">Other (Please specify)</option>
        </select>
        <input type="text" name="email" value={studentData.teleNumber || ''}/>
        </label>
      </div>
      )}

      {/*Email*/}
      {studentData && Object.keys(studentData).length > 0 && ( // Check for valid data
      <div>
      <label>
        Email address:
        <input type="email" name="email" value={studentData.Email || ''}/>
      </label>
      <h2>Postal address</h2>
      </div>
      )}

      {/*Address*/}
      <label>
        Address type:
        <select name="addressType" value={contactDetails.addressType} onChange={handleInputChange}>
          <option value="Non-UK address">Non-UK address</option>
          <option value="UK address">UK address</option>
        </select>
      </label>

      {/*Address line 1*/}
      {studentData && Object.keys(studentData).length > 0 && ( // Check for valid data
      <div>
      <label>
        Address line 1:
        <input type="text" name="addressLine1" value={studentData.addressLine1 || ''} />
      </label>
      </div>
      )}

      {/*Address line 2*/}
      {studentData && Object.keys(studentData).length > 0 && ( // Check for valid data
      <div>
      <label>
        Address line 2:
        <input type="text" name="addressLine2" value={studentData.addressLine2 || ''} />
      </label>
      </div>
      )}

      {/*Address line 3*/}
      {studentData && Object.keys(studentData).length > 0 && ( // Check for valid data
      <div>
      <label>
        Address line 3:
        <input type="text" name="addressLine3" value={studentData.addressLine3 || ''} />
      </label>
      </div>
      )}

      {/*Address line 4*/}
      {studentData && Object.keys(studentData).length > 0 && ( // Check for valid data
      <div>
      <label>
        Address line 4:
        <input type="text" name="addressLine4" value={studentData.addressLine4 || ''} />
      </label>
      </div>
      )}

      <label>
        Country:
        <select name="country" value={contactDetails.country} onChange={handleInputChange}>
          <option value="Srilanka">Srilanka</option>
          {/* Add other countries here */}
        </select>
      </label>

      <h2>Nominated access</h2>
      <p>Do you want someone else to be able to act, or speak on your behalf, about your application? e.g. A parent, teacher, other relative or guardian. If you are using an agent, you can choose to enter their details.</p>
      <p>You're able to enter details of someone you’re happy to help manage your application - this is called nominated access.</p>

      <label>
        <input type="radio" name="nominatedAccess" value="Yes" checked={contactDetails.nominatedAccess} onChange={handleRadioChange} />
        Yes
      </label>

      <label>
        <input type="radio" name="nominatedAccess" value="No" checked={!contactDetails.nominatedAccess} onChange={handleRadioChange} />
        No
      </label>

      {contactDetails.nominatedAccess && (
        <>
          <label>
            Full name of nominee:
            <input type="text" name="nomineeName" value={contactDetails.nomineeName} onChange={handleInputChange} />
          </label>

          <label>
            How you know your nominee:
            <input type="text" name="nomineeRelation" value={contactDetails.nomineeRelation} onChange={handleInputChange} />
          </label>
          
      
        </>
      )}
      <button type="submit">Save and continue</button>
    </form>
    </Sidebar>
  );
  
}

export default Contactandresidencydetails;