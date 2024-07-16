import { useState } from 'react'
import insta from '../images/insta.png'
import facebook from '../images/facebook.png'
import x from '../images/x.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import send from '../images/send.png'

const Contacts = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section id="contacts">
      <h1 className="title contacts-title" id="contacts-title">CONTACTS</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" required placeholder='Your Email Address' onChange={(e) => {setEmail(e.target.value)}}/>
        <textarea required placeholder='Message' onChange={(e) => {setMessage(e.target.value)}}/>
        <button>
          <img className='w-8' src={send}/>
          <h1>Send</h1>
        </button>
      </form>
      <div id='social'>
        <a href='#'>
          <img src={github}/>
        </a>
        <a href='#'>
          <img src={linkedin}/>
        </a>
        <a href='#'>
          <img src={insta}/>
        </a>
        <a href='#'>
          <img src={facebook}/>
        </a>
        <a href='#'>
          <img src={x}/>
        </a>
      </div>
    </section>
  )
}

export default Contacts