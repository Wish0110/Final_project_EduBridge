import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatbotResponse, setChatbotResponse] = useState('');

  const generateResponse = async (input) => {
    const response = await axios.post('/api/chatbot', { input });
    setChatbotResponse(response.data.message);
  };

  useEffect(() => {
    if (userInput) {
      generateResponse(userInput);
    }
  }, [userInput]);

  return (
    <div className="chatbot-container">
      <div className="chat-history">
        {chatbotResponse && (
          <div className="message">
            <span className="role">Chatbot:</span>
            <span className="content">{chatbotResponse}</span>
          </div>
        )}
      </div>
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          placeholder="Ask me anything..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button className="submit-button" onClick={() => generateResponse(userInput)}>
          Generate Response 🤖
        </button>
      </div>
    </div>
  );
};

export default Chatbot;