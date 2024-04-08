import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GeneratedLetter from './GeneratedLetter';

const App = () => {
  const [letter, setLetter] = useState('');

  useEffect(() => {
    const fetchLetter = async () => {
      try {
        const response = await axios.get('/api/generate-letter');
        setLetter(response.data.data);
      } catch (error) {
        console.error('Error fetching letter:', error);
      }
    };

    fetchLetter();
  }, []);

  return (
    <div>
      <h1>Letter Generator</h1>
      <GeneratedLetter letter={letter} />
    </div>
  );
};

export default App;