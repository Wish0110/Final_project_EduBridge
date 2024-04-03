import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [studentId, setStudentId] = useState('');
  const [studentData, setStudentData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3002/api/fetch-student', { studentId });

      if (response.data.success) {
        setStudentData(response.data.data);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Student ID:
          <input type="text" value={studentId} onChange={(event) => setStudentId(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {studentData && (
        <div>
          <h2>Student Data:</h2>
          <p>Name: {studentData.name}</p>
          <p>Student ID: {studentData.studentId}</p>
        </div>
      )}
    </div>
  );
}

export default App;