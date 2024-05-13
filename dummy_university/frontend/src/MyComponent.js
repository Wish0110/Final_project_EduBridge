import React, { useState } from 'react';
import axios from 'axios'; // HTTP client for sending requests

const MyComponent = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/send-email', {
        
      });

      setMessage(response.data.message); // Display success message
    } catch (error) {
      setMessage('Error sending email'); // Display error message
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={to} onChange={(e) => setTo(e.target.value)} placeholder="Recipient Email" />
      <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Email Body" />
      <button type="submit">Send Email</button>
      {message && <p>{message}</p>}  {/* Display success or error message */}
    </form>
  );
};

export default MyComponent;
