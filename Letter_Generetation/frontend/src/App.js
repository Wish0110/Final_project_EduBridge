import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [studentID, setStudentID] = useState('');
  const [letter, setLetter] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3002/api/generate-letter', {
        studentId: studentID,
      });

      setLetter(response.data.letter);
    } catch (error) {
      console.error(error);
      // Handle errors appropriately in the frontend
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Student ID:
          <input type="text" value={studentID} onChange={(e) => setStudentID(e.target.value)} />
        </label>
        <button type="submit">Generate Letter</button>
      </form>
      <div>{letter}</div>
    </div>
  );
}

export default App;