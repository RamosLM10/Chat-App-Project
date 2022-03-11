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
      
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${style}`} style={{ width: '100%' }}>
          <div className="message-block">
            
            {/* if ismymessage then render mymessage, but if not, render theirmessage*/}
            {
              isMyMessage
              ?
              <MyMessage />
              :
              <TheirMessage />
            }
          </div>
          <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft : isMyMessage ? '0px' : '68px' }}>
            read receipts
          </div>
        </div>
      )
    })
  }

  // if no chat
  if(!chat) return 'Please wait...'

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat.title}</div>
        <div className="chat-subtitle">
          {/* using dynamic logic */}
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      {/* create a self-closing div for space */}
      <div style={{ height: '100px' }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
}

export default ChatFeed;