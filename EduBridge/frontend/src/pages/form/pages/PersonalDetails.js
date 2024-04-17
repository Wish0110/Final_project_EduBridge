import React, { useState } from "react";
import axios from "axios";
import './form-css/PersonalDetails.css';
import Sidebar from "../components/Sidebar";

const PersonalDetails = () => {
  const [studentId, setStudentId] = useState('');
  const [studentData, setStudentData] = useState({
    name: '',
    studentid: '',
    lastName: '',
    prvName: '',
    preferredName: '',
    dateOfBirth: '',
    gender: ''
  });
  const [title, setTitle] = useState("");
  const [sectionComplete, setSectionComplete] = useState(false);
  

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3004/api/fetch-student', { studentId });
  
      if (response.data.success) {
        const { name, studentid, lastName, prvName, preferredName, dateOfBirth, gender } = response.data.data;
        setStudentData({
          name,
          studentid,
          lastName, // Include lastName here
          prvName,
          preferredName,
          dateOfBirth,
          gender
        });
        

      
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
    
  };

  return (
    <Sidebar>
    <div>
    <form onSubmit={handleSubmit}>
        <h1>Personal Details</h1>
         <label>
          Student ID:
          <input type="text" value={studentId} onChange={(event) => setStudentId(event.target.value)} />
        </label>
        <button type="submit">Submit</button>

        <h2>Title</h2>
      <select value={title} onChange={(e) => setTitle(e.target.value)}>
        <option value="">Select an option</option>
        <option value="Miss">Miss</option>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
      </select>

  
        <div>
            <h2>First and Middle Name(s)</h2>
                <p>
                  Make sure your name is as it appears on any official documents, such as
                  your passport, birth certificate or driving licence.
                </p>
                {studentData && <textarea value={studentData.name} readOnly />}
        </div>


       <div>
          <h2>Last Name</h2>
            <p>
              Make sure your name is as it appears on any official documents, such as
              your passport, birth certificate or driving licence.
            </p>
            {studentData && <textarea value={studentData.lastName} readOnly />}    
            </div>  

      <div>

      <h2>Previous Name(s)</h2>
      <p>
        Tell us any other names you've been known by (for example maiden name), as
        it helps when we're matching educational records.
      </p>
      {studentData && (
      <textarea
        value={studentData.prvName}
        onChange={(e) => setStudentData({ ...studentData, prvName: e.target.value })}
      />
    )}
    </div>

      <div>
      <h2>Preferred Name</h2>
      <p>
        Let us know what we, and your chosen universities and colleges, should
        call you in our correspondence.
      </p>
      {studentData && (
      <textarea
        value={studentData.preferredName}
        onChange={(e) => setStudentData({ ...studentData, preferredName: e.target.value })}
      />
    )}
      </div>  

      <div>
      <h2>Date of Birth</h2>
      <p>DD MM YYYY</p>
      {studentData && <input value={studentData.dateOfBirth} readOnly />}
      </div>

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
          checked={studentData.gender === "man"}
          onChange={(e) => setStudentData({ ...studentData, gender: e.target.value })}
        />
        <label htmlFor="man">Man</label>
      </div>
      <div className="radio-group">
        <input
          type="radio"
          id="woman"
          name="gender"
          value="woman"
          checked={studentData.gender === "woman"}
          onChange={(e) => setStudentData({ ...studentData, gender: e.target.value })}
        />
        <label htmlFor="woman">Woman</label>
      </div>
      <div className="radio-group">
        <input
          type="radio"
          id="another"
          name="gender"
          value="another"
          checked={studentData.gender === "another"}
          onChange={(e) => setStudentData({ ...studentData, gender: e.target.value })}
        />
        <label htmlFor="another">Use another term</label>
      </div>
      <div className="radio-group">
        <input
          type="radio"
          id="not_to_say"
          name="gender"
          value="not_to_say"
          checked={studentData.gender === "not_to_say"}
          onChange={(e) => setStudentData({ ...studentData, gender: e.target.value })}
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

      <button type="submit" disabled={!sectionComplete}>
            Save Progress
          </button>
    </form>
    </div>
    </Sidebar>
  );
};

export default PersonalDetails;

