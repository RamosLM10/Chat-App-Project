const TheirMessage = ({ message, lastMessage }) => {
  // if not the lastmessage or lastmessage is not equal to message
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {/* do some logic, if it isfirstmessagebyuser then return   */}
      {isFirstMessageByUser && (
          <div 
            className="message-avatar"
            style={{ backgroundImage: `url(${message?.sender?.avatar})`}}
          />
      )}
      {message?.attachments?.length > 0 
      ? (
          <img 
              src={message.attachments[0].file}
              alt="message-attachment"
              className="message-image"
              style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
          />
        ) : (
          <div className="message" style={{ float:'left', backgroundColor:'#f8e5af', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
            {message.text}
          </div>
          )
      }
    </div>
  )
}

export default TheirMessage;