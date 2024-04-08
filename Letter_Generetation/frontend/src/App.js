import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [studentId, setStudentId] = useState('');
  const [studentData, setStudentData] = useState(null);
  const [letter, setLetter] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3002/api/fetch-student', { studentId });
    const { success, data, message } = response.data;
    if (success) {
      setStudentData(data);
      const letterResponse = await axios.post('http://localhost:3002/api/generate-letter', { studentData });
      const { success: letterSuccess, data: letterData, message: letterMessage } = letterResponse.data;
      if (letterSuccess) {
        setLetter(letterData);
      } else {
        console.error('Error generating letter:', letterMessage);
      }
    } else {
      console.error('Error fetching student data:', message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter student ID:
          <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        </label>
        <button type="submit">Fetch Data and Generate Letter</button>
      </form>
      {studentData && (
        <div>
          <h2>Student Data:</h2>
          <p>Name: {studentData.name}</p>
          <p>Student ID: {studentData.studentId}</p>
          <p>Degree: {studentData.degree}</p>
          <p>GPA: {studentData.gpa}</p>
          <p>Sports: {studentData.sports}</p>
          <p>Faculty: {studentData.faculty}</p>
        </div>
      )}
      {letter && (
        <div>
          <h2>Generated Letter:</h2>
          <p>{letter}</p>
        </div>
      )}
    </div>
  );
}

export default App;