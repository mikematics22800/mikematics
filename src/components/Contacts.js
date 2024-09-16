import { useState } from 'react'
import { sendEmail } from '../libs/email'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import send from '../images/send.png'

const Contacts = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    sendEmail({email, message}).then(() => {
      alert('Email sent successfully')
    }).catch((err) => {
      console.error(err)
      alert('Failed to send email')
    })
  }

  return (
    <section id="contacts">
      <h1 className="title contacts-title" id="contacts-title">EMAIL ME HERE!</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" required placeholder='Your email address' onChange={(e) => {setEmail(e.target.value)}}/>
        <textarea required placeholder='Message' onChange={(e) => {setMessage(e.target.value)}}/>
        <button>
          <img className='w-8' src={send}/>
          <h1>Send</h1>
        </button>
      </form>
      <div id='social'>
        <a href='https://github.com/mikematics22800'>
          <img src={github}/>
        </a>
        <a href='https://www.linkedin.com/in/michael-medina-928828207/'>
          <img src={linkedin}/>
        </a>
      </div>
    </section>
  )
}

export default Contacts