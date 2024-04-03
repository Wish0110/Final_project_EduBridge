import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [studentId, setStudentId] = useState('');
  const [studentData, setStudentData] = useState({ name: '', studentId: '' });

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

  const handleNameChange = (event) => {
    setStudentData({ ...studentData, name: event.target.value });
  };

  const handleStudentIdChange = (event) => {
    setStudentData({ ...studentData, studentId: event.target.value });
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
          <label>
            Name:
            <textarea value={studentData.name} onChange={handleNameChange} />
          </label>
          <label>
            Student ID:
            <textarea value={studentData.studentId} onChange={handleStudentIdChange} />
          </label>
        </div>
      )}
    </div>
  );
}

export default App;