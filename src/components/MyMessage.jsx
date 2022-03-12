const MyMessage = ({ message }) => {
  // if message has attachments then return the following...
  // ?. is optional chaining - When used with function calls, 
  // it returns undefined if the given function does not exist.
  // It can also be helpful while exploring the content of an object 
  // when there's no known guarantee as to which properties are required.
  if(message?.attachments?.length > 0) {
    return (
      <img 
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float:'right' }}
      />
    )
  }
  return (
    <div className="message" style={{ float:'right', marginRight:'18px', color:'white', backgroundColor:'#d86983' }}>
      {message.text}
    </div>
  )
}

export default MyMessage;