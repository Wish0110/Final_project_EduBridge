import React, { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_KEY = "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";

const systemMessage = {
  role: "system",
  content:
    "Only reply about UK related topic specially UK universities. Tell the answer short and directly and numberize the universities. And also should numbersize in the best order ",
};

function ChatBot() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm MOCHA! Ask me anything related about UK!!!",
      sentTime: "just now",
      role: "assistant",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      role: "user",
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
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

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        if (data.choices && data.choices[0] && data.choices[0].message) {
          setMessages([...chatMessages, {
            message: data.choices[0].message.content,
            role: "assistant",
          }]);
          setIsTyping(false);
        }
      })
      .catch((error) => {
        console.error("Error processing message:", error);
        setIsTyping(false);
      });
  }

  return (
    <div className="App">
      <div style={{ position: "relative", height: "700px", width: "700px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList scrollBehavior="smooth">
              {messages.map((message, i) => (
                <Message key={i} model={{ ...message }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent:
                        message.role === "assistant"
                          ? "flex-start"
                          : "flex-end",
                      marginBottom: "10px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor:
                          message.role === "assistant"
                            ? "#E9F1FF"
                            : "#D8E8F8",
                        padding: "10px",
                        borderRadius: "20px",
                        maxWidth: "80%",
                      }}
                    >
                      {message.message}
                    </div>
                  </div>
                </Message>
              ))}
              {isTyping && <TypingIndicator />}
            </MessageList>
            <MessageInput
              onSend={handleSend}
              placeholder="Type your message"
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default ChatBot;