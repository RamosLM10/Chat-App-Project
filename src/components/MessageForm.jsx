import { useState } from "react"
import { sendMessage, isTyping } from "react-chat-engine"

const MessageForm = (props) => {
  const [value, setValue] = useState('')
  const { chatId, creds } = props;

  const handleSubmit = (event) => {
    // make sure not to do a browser reset when it submits a form
    event.preventDefault();

    const text = value.trim();

    if(text.length > 0) sendMessage(creds, chatId, { text })

    setValue('');
  }
  const handleChange = (event) => {
    // where the value of the input is stored in
    setValue(event.target.value);

    isTyping(props, chatId);
  }

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input 
        className="message-input"
        placeholder="Write your message..."
        value={value}
        onChange={handleChange}
        onSumbit={handleSubmit}
      />
    </form>
  )
}

export default MessageForm;