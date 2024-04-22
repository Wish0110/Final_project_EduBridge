import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
} from "react-bootstrap";

const API_KEY = "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";

const systemMessage = {
  role: "system",
  content:
    "Only reply about UK related topic specially UK universities. Tell the answer short and directly and numberize the universities. And also should numbersize in the best order ",
};

function App() {
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
    <Container fluid>
      <Row>
        <Col md={12}>
          <div style={{ height: "600px", overflowY: "scroll" }}>
            {messages.map((message, i) => (
              <Row key={i} className={`mb-3 ${message.role === "assistant" ? "justify-content-start" : "justify-content-end"}`}>
                <Col xs={10} md={9}>
                  <div style={{ backgroundColor: message.role === "assistant" ? "#E9F1FF" : "#D8E8F8", padding: "10px", borderRadius: "20px" }}>
                    {message.message}
                  </div>
                </Col>
              </Row>
            ))}
            {isTyping && <Row className="justify-content-center"><Col xs={10} md={9}><Spinner animation="border" /></Col></Row>}
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Form.Control
            type="text"
            placeholder="Type your message"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
          />
        </Col>
        <Col md={12} className="text-end">
          <Button variant="primary" onClick={handleSend}>Send</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;