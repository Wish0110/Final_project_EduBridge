import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import "./bot.css"; // import the CSS file

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
  const [typingAnimation, setTypingAnimation] = useState(""); 

  const hardcodedResponses = {
    "Hello": "Hello! How can I help you today?",
    "plymouth university best for?": "Marine science and engineering:Plymouth has a long history of maritime research and was awarded the Queen's Anniversary Prize in 2012 for its worldwide reputation in the field .",
    "What are the top universities in the UK to study?": "The top universities in the UK are 1. University of Cambridge, 2. University of Oxford, 3. Imperial College London, 4. University College London, and 5. London School of Economics and Political Science.",
    "What are the top universities in the Australia to study?": "I can't directly tell you about Australian universities, since we're focusing on UK information. ",
    "Tell me about the University of Cambridge.": "The University of Cambridge is a public research university located in Cambridge, England. It is one of the oldest universities in the world and consistently ranks among the top universities in the UK and globally.",
    "What is unique about the University of Oxford?": "The University of Oxford is the oldest university in the English-speaking world and one of the most prestigious universities in the world. It has a unique tutorial-based teaching system and a strong focus on research.",
    "Which university is known for business and economics?": "The London School of Economics and Political Science (LSE) is known for its strong focus on business and economics. It is consistently ranked among the top universities in these fields both in the UK and globally.",
  };

  useEffect(() => {
    if (isTyping) {
      const typingTimeout = setTimeout(() => {
        setTypingAnimation((prev) => prev + ".");
        if (typingAnimation.length > 3) {
          setTypingAnimation("");
        }
      }, 300); // 300ms = 0.3s delay
      return () => clearTimeout(typingTimeout);
    }
  }, [isTyping, typingAnimation]);

  const handleSend = () => {
    const newMessage = {
      message: inputMessage,
      direction: "outgoing",
      role: "user",
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setIsTyping(true);

    if (hardcodedResponses[inputMessage]) {
      setTimeout(() => {
        setMessages([...newMessages, {
          message: hardcodedResponses[inputMessage],
          role: "assistant",
        }]);
        setIsTyping(false);
        setInputMessage("");
      }, 1500); // 1500ms = 1.5s delay
    } else {
      setTimeout(() => {
        setMessages([...newMessages, {
          message: "",
          role: "assistant",
        }]);
        setIsTyping(false);
        setInputMessage("");
      }, 1500); // 1500ms = 1.5s delay
    }
  };

  
  return (
    <div className="bot-container">
      <div className="bot-row">
        <div className="bot-messages">
          {messages.map((message, i) => (
            <div key={i} className={`bot-message ${message.role === "assistant" ? "" : "bot-user-message"}`}>
              {message.message}
            </div>
          ))}
          {isTyping && (
            <div className="bot-spinner">
              <Spinner animation="border" />
              <span className="bot-typing">{typingAnimation}</span>
            </div>
          )}
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