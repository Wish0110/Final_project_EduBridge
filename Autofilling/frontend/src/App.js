import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [studentId, setStudentId] = useState('');
  const [studentData, setStudentData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post('/api/findStudent', { studentId });
      setStudentData(response.data.student);
      setError(null);
    } catch (error) {
      console.error('Error fetching student data:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="App">
      <h1>Enter Student ID</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="studentId">Student ID:</label>
        <input
          type="text"
          id="studentId"
          name="studentId"
          value={studentId}
          onChange={(event) => setStudentId(event.target.value)}
          required
        />
        <button type="submit">Find Student</button>
      </form>
      {studentData && (
        <div>
          <p>Name: {studentData.name}</p>
          <p>Student ID: {studentData.studentid}</p>
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
