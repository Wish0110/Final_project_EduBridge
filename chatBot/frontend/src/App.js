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