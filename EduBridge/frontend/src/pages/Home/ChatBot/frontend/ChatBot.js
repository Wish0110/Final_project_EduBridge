import { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "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";

const systemMessage = {
  role: "system",
  content: "Only reply about UK related topic specially UK universities.tell the answer short and directly and numberize the universities. And also should numbersize in the best order ",
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
      direction: 'outgoing',
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
        setMessages([...chatMessages, {
          message: data.choices[0].message.content,
          role: "assistant",
        }]);
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
                  {/* Determine color and alignment based on role */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: message.role === 'assistant' ? 'flex-start' : 'flex-end',
                      backgroundColor: message.role === 'assistant' ? '#dcf8c6' : '#f0f0f0',
                      padding: '10px',
                      borderRadius: '5px',
                      wordWrap: 'break-word',
                    }}
                  >
                    {message.message}
                  </div>
                </Message>
              ))}
              {isTyping && <TypingIndicator content="Mocha is typing" />}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default ChatBot;