import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [studentID, setStudentID] = useState('');
  const [letter, setLetter] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/getResponse', {
        studentid: studentID,
      });
// Handle the response data
const { studentDetails, recommendationLetter } = response.data;
setLetter(recommendationLetter);
// Optionally, display studentDetails if needed
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
        <button type="submit">OK</button>
      </form>
      <div>{letter}</div>
    </div>
  );
}

export default App;