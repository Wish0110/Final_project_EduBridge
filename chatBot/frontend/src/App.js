import React, { useState } from 'react';
import './App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator
} from '@chatscope/chat-ui-kit-react';

const API_KEY = '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';

function App() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am ChatGPT!",
      sender: "ChatGpt",
    }
  ]) //[]

  const handleSend = async (message) => {
    const newMessage = { 
      message: message,
      sender: "user",
      direction: "outgoing" ,
    }

    const newMessages = [...messages, newMessage]; // old and new messages

    // update messages state
    setMessages(newMessages);

    //typing indicatore
    setTyping(true);
    //process user message
    await processMessageToChatGPT(newMessages);
  }

  async function processMessageToChatGPT(chatMessage) {
    //chatMessages {sender: "user" or "ChatGpt", message: "message"}
    // apiMessages { role: "user" or "assistant", content: "message"}

    let apiMessages = chatMessage.map((messageObject) => {
      let role = "";
       if (messageObject.sender === "ChatGPT") {
         role = "assistant"
       } else {
         role = "user"
       }
       return { role: role, content: messageObject.message }

    });

    //role: "user" or "assistant", content: "message"

    const systemMessage = {
      role: "system",
      content: "Explain all consepts like I am 21 years old."
    }

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages // [message1, message2, ...]
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": "Bearer " + API_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(apiRequestBody)
  }).then((data) => {
    return data.json();
  }).then((data) => {
    console.log(data);
    console.log(data.choices[0].message.content);
    setMessages(
      [...messages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT",
      }]
    );
    setTyping(false);
  });
}
  return (
    <div className="App">
      <div style={{ position: "relative", height: '700px', width:"700px"}}>
        <MainContainer>
          <ChatContainer>
            <MessageList
            typingIndicator={typing ? <TypingIndicator content="Mocha is typing" /> :null}
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend}/>
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;