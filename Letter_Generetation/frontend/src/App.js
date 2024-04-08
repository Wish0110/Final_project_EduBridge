import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [studentId, setStudentId] = useState('');
  const [letter, setLetter] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3002/api/fetch-student', { studentId });
      if (response.data.success) {
        const letterResponse = await axios.post('http://localhost:3002/api/generate-letter', { studentData: response.data.data });
        if (letterResponse.data.success) {
          setLetter(letterResponse.data.data);
        } else {
          setError(letterResponse.data.message);
        }
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError('An error occurred while fetching student data or generating the letter.');
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Generate Letter of Recommendation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Generate Letter'}</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {letter && <pre style={{ whiteSpace: 'pre-wrap', marginTop: '20px' }}>{letter}</pre>}
    </div>
  );
}

export default App;