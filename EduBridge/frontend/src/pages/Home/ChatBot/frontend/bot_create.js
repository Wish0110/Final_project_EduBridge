import React, { useState } from "react";
import axios from "axios";
import "./bot.css"; // import the CSS file

const API_KEY = "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";

const systemMessage = {
  role: "system",
  content:
    "Only reply about UK related topic specially UK universities. Tell the answer short and directly and numberize the universities. And also should numbersize in the best order ",
};

function Bot() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm MOCHA! Ask me anything related about UK!!!",
      sentTime: "just now",
      role: "assistant",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputMessage, setInputMessage] = useState("");

  const handleSend = async () => {
    const newMessage = {
      message: inputMessage,
      direction: "outgoing",
      role: "user",
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);

    // Clear input field
    setInputMessage("");
  };

  async function processMessageToChatGPT(chatMessages) {
    // Format messages for chatGPT API
    let apiMessages = chatMessages.map((messageObject) => {
      return { role: messageObject.role, content: messageObject.message };
    });

    // Get the request body with the model and formatted messages
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        apiRequestBody,
        {
          headers: {
            Authorization: "Bearer " + API_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.choices && response.data.choices[0] && response.data.choices[0].message) {
        setMessages([...chatMessages, {
          message: response.data.choices[0].message.content,
          role: "assistant",
        }]);
        setIsTyping(false);
      }
    } catch (error) {
      console.error("Error processing message:", error);
      setIsTyping(false);
    }
  }

  return (
    <div className="bot-container">
      <div className="bot-row">
        <div className="bot-messages">
          {messages.map((message, i) => (
            <div key={i} className={`bot-message ${message.role === "assistant" ? "" : "bot-user-message"}`}>
              {message.message}
            </div>
          ))}
          {isTyping && <div className="bot-spinner"><Spinner animation="border" /></div>}
        </div>
      </div>
      <div className="bot-input-container">
        <input type="text" className="bot-input" placeholder="Type your message" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }} />
        <button className="bot-send" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default Bot;