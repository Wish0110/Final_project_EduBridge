import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [studentID, setStudentID] = useState('');
  const [letter, setLetter] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3002/api/generate-letter', {
        studentId: studentID,
      });
  
      // Send the generated letter to the backend
      axios.post('http://localhost:3002/api/print-letter', { letter: response.data.data });
  
      setLetter(response.data.data);
      setStatus(response.data.message);
    } catch (error) {
      console.error(error);
      setLetter('');
      setStatus('An error occurred while generating the letter.');
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
      {status && <p>{status}</p>}
      <div>{letter}</div>
    </div>
  );
}

export default App;