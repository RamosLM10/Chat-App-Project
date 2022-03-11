import './App.css';
import { ChatEngine } from 'react-chat-engine';
import  ChatFeed  from './components/ChatFeed';

function App() {
  return (
    < ChatEngine
        height= "100vh"
        projectID= "62ff7bf3-1146-4f86-9f3d-57884bcfd1b5"   
        userName= "Luis Ramos"
        userSecret= "Luis"
        renderChatFeed= {(chatAppProps) => <ChatFeed { ...chatAppProps }  />}
    />
  );
}

export default App;
