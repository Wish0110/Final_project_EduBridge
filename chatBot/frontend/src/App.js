import './App.css';
import '@chatscope/chat-ui-kit-react/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, MessageGroup, MessageInput, TypingIndicator} from '@chatscope/chat-ui-kit-react';

function App() {
  // eslint-disable-next-line no-undef
  const [messages, setMessages] = useState([
  {
    message: "Hello, how can I help you?",
    sender: "chatbot"
  }
 ])

  return (
    <div className="App">
      <div style={{ position: "relative", height: '800vh', width:"700px"}}>
        <MainContainer>
          <ChatContainer>
            <MessageList>

            </MessageList>
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;
