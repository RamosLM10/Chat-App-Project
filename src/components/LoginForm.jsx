import React, { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('second')

  const handleSubmit = async (e) => {
    // in order for the browser not to refresh
    e.preventDefault()

    // username and password are correct then we get to the chat engine
    // then gives us the messages, if all works out then you get logged in
    // if not then, create a new username
    const authObject = { 'Project-ID': '62ff7bf3-1146-4f86-9f3d-57884bcfd1b5', 'User-Name': username, 'User-Secret': password }

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject })

      // username and password in localstorage
      localStorage.setItem('username', username)
      localStorage.setItem('password', password)

      // reload page, not always going to be in chatengine, sometimes have to be in login page
      window.location.reload()
    } catch (error) {
      setError('Please type in the correct details')
    }
  }

  return (
    <div className='wrapper'>
      <div className='form'>
        <h1 className='title'>Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Your Username' required/>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Your Password' required/>
          <div align='center'>
            <button type='submit' className='button'>
              <span>Get In And Chat!</span>
            </button>
          </div>
          <h2 className='error'>{error}</h2>
        </form>
      </div>
    </div>
  )
}

export default LoginForm