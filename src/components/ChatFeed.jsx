import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;


  // if chats exist, look for activeChat
  const chat = chats && chats[activeChat];

  // map over the people who read the messages and acts a callback function
  // the code would only render if the person last read the message
  const renderReadReceipts = (message, isMyMessage) => {
    return chat.people.map((person, index) => person.last_read === message.id && (
      <div 
        key={`read_${index}`}
        className="read-receipt"
        style={{
          float: isMyMessage ? 'right' : 'left',
          backgroundImage: `url(${person?.person?.avatar})`
        }}
      />
    ))
  }

  const renderMessages = () => {
    const keys = Object.keys(messages);
    
    // do a callback function
    return keys.map((key, index) => {
      const message = messages[key];

      // if index return 0 then return null, else return last message
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className="message-block">
            
            {/* if ismymessage then render mymessage, but if not, render theirmessage*/}
            {
              isMyMessage
              ?
              // passing one prop in mymessage
              <MyMessage message={message} />
              :
              // passing two props in theirmessage
              <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
            }
          </div>
          <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft : isMyMessage ? '0px' : '68px' }}>
            {renderReadReceipts(message, isMyMessage)}
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