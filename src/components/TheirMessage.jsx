const TheirMessage = ({ message, lastMessage }) => {
  // if not the lastmessage or lastmessage is not equal to message
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {/* do some logic, if it isfirstmessagebyuser then return   */}
      {isFirstMessageByUser && (
          <div 
          
          />
      )}
    </div>
  )
}

export default TheirMessage;