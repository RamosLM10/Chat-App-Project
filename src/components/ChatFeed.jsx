import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;


  // if chats exist, look for activeChat
  const chat = chats && chats[activeChat];

  const renderMessages = () => {
    const keys = Object.keys(messages);
    
    // do a callback function
    return keys.map((key, index) => {
      const message = messages[key];

      // if index return 0 then return null, else return last message
      const lastMessageKey = index === 0 ? null : keys[index - 1];

      const isMyMessage = username === message.sender.username;
    })
  }

  renderMessages()

  return (
    <div>
      Chatfeed
    </div>
  );
}

export default ChatFeed;