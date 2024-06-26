import React, { useState } from "react";
import axios from "axios";
import './form-css/PersonalDetails.css';
import Sidebar from "../components/Sidebar";

const PersonalDetails = () => {
  const [studentId, setStudentId] = useState('');
  const [studentData, setStudentData] = useState({
    name: '',
    lastname: '',
    prvName: '',
    preferredName: '',
    dateOfBirth: ''
  });
  const [title, setTitle] = useState("");
  const [gender, setGender] = useState("");
  const [sectionComplete, setSectionComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  
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

  const handleFormSubmission = async () => {
    // Create a new student object to store in the database
    const newStudent = {
      studentId,
      title,
      gender,
      ...studentData
    };

    try {
      // Make a POST request to your MongoDB API to store the data
      const response = await axios.post('http://localhost:3007/api/store-student', newStudent);

      if (response.data.success) {
        console.log('Student data stored successfully!');
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Error storing student data:', error);
    }
  };


  return (
    <Sidebar>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="PersonaldetailsForm">
          <h1>Personal Details</h1>
          <label>
            Student ID:
            <input type="text" value={studentId} onChange={(event) => setStudentId(event.target.value)} />
          </label>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'submit'}
          </button>

          <h2>Title</h2>
          <select value={title} onChange={(e) => setTitle(e.target.value)}>
            <option value="">Select an option</option>
            <option value="Miss">Miss</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
          </select>

          {/*First and Middle Name*/}
          {studentData && Object.keys(studentData).length > 0 && ( // Check for valid data
            <div>
              <h2>First and Middle Name(s)</h2>
              <p>
                Make sure your name is as it appears on any official documents, such as
                your passport, birth certificate or driving licence.
              </p>
              <textarea
                 value={studentData.name || ''}
                 onChange={(e) => setStudentData({ ...studentData, name: e.target.value })}
              />
            </div>
          )}

          {/*last Name*/}
          {studentData && Object.keys(studentData).length > 0 && (
            <div>
              <h2>Last Name</h2>
              <p>
                Make sure your name is as it appears on any official documents, such as
                your passport, birth certificate or driving licence.
              </p>
              <textarea
                value={studentData.lastname || ''} 
                onChange={(e) => setStudentData({ ...studentData, lastname: e.target.value })}
                  />
                </div>
          )}

          {/*Previous Name*/}
          {studentData && Object.keys(studentData).length > 0 && (
            <div>
              <h2>Previous Name(s)</h2>
              <p>
                Tell us any other names you've been known by (for example maiden name), as
                it helps when we're matching educational records.
              </p>
              <textarea
                value={studentData.prvName || ''}
                onChange={(e) => setStudentData({ ...studentData, prvName: e.target.value })}
              />
          </div>
          )}

          {/*Preferred Name*/}
          {studentData && Object.keys(studentData).length > 0 && (
            <div>
              <h2>Preferred Name</h2>
              <p>
              Let us know what we, and your chosen universities and colleges, should
                call you in our correspondence.
              </p>
              <textarea
                value={studentData.preferredName || ''}
                onChange={(e) => setStudentData({ ...studentData, preferredName: e.target.value })}
              />
            </div>
          )}

          {/*Date of Birth*/}
          {studentData && Object.keys(studentData).length > 0 && (
            <div>
              <h2>Date of Birth</h2>
              <p>DD MM YYYY</p>
              <input
                type="text"
                value={studentData.dateOfBirth || ''}
                onChange={(e) => setStudentData({ ...studentData, dateOfBirth: e.target.value })}
              />
          </div>
          )}

      <h2>Gender</h2>
      <p>
        Select the gender you most identify with at this time. You can tell the
        university or college directly if you'd feel more comfortable
        identifying in another way, or if this changes.
      </p>
      <div className="radio-group">
        <input
          type="radio"
          id="man"
          name="gender"
          value="man"
          checked={gender === "man"}
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="man">Man</label>
      </div>
      <div className="radio-group">
        <input
          type="radio"
          id="woman"
          name="gender"
          value="woman"
          checked={gender === "woman"}
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="woman">Woman</label>
      </div>
      <div className="radio-group">
        <input
          type="radio"
          id="another"
          name="gender"
          value="another"
          checked={gender === "another"}
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="another">Use another term</label>
      </div>
      <div className="radio-group">
        <input
          type="radio"
          id="not_to_say"
          name="gender"
          value="not_to_say"
          checked={gender === "not_to_say"}
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="not_to_say">I prefer not to say</label>
      </div>

      <div>
        <input
          type="checkbox"
          checked={sectionComplete}
          onChange={(e) => setSectionComplete(e.target.checked)}
        />
        <label>
          Mark this section as complete.
          <br />
          You must complete all mandatory fields in this section before you can
          mark it as complete. All sections must be marked as complete before you
          can send your application.
        </label>
      </div>

      <button type="button" onClick={handleFormSubmission} disabled={!sectionComplete}>
        
            Save Progress
          </button>
    </div>      
    </form>
    </div>
    
    </Sidebar>
  );
};

export default PersonalDetails;

