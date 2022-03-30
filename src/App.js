import './App.css';
import { ChatEngine } from 'react-chat-engine';
import  ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {
  // if there is no username
  if (!localStorage.getItem('username')) return <LoginForm />
  
  return (
    <ChatEngine
      height= "100vh"
      projectID= "62ff7bf3-1146-4f86-9f3d-57884bcfd1b5"   
      userName= {localStorage.getItem('username')}
      userSecret= {localStorage.getItem('password')}
      renderChatFeed= {(chatAppProps) => <ChatFeed { ...chatAppProps }  />}
    />
  );
}

export default App;
