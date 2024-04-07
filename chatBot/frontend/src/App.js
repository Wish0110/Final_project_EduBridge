import './App.css';
import '@chatscope/chat-ui-kit-react/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from '@chatscope/chat-ui-kit-react';

function App() {
  // eslint-disable-next-line no-undef
  const [messages, setMessages] = useState([
  {
    message: "Hello, how can I help you?",
    sender: "chatbot"
  }
 ])

 const handleSend = async (message) => {
  const newMessage = { 
    message: message,
    sender: "user" 
  }

  const newMessages = [...messages, newMessage] // old and new messages

  // update messages state

  //process user message
 }
  return (
    <div className="App">
      <div style={{ position: "relative", height: '800vh', width:"700px"}}>
        <MainContainer>
          <ChatContainer>
            <MessageList>
              {messages.map((message, i) => {
                return <message key="i" model={message} />
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
