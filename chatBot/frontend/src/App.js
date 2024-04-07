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
       if (messageObject.sender === "user") {
         role = "assistant"
       } else {
         role = "user"
       }
       return { role: role, content: messageObject.message }

    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        ...apiMessages // [message1, message2, ...]
      ]
    }

    await fetch("http://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer" + API_KEY,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(apiRequestBody)
  })
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