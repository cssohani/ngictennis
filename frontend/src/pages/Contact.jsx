import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  return (
      <div className="contact-section">
        <div className="contact-left">
          <h1>Have any questions for us?</h1>
          <h4>Send us a message!</h4>
        </div>
        <div className="contact-right">
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea rows="5" placeholder="Message" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
  )
}

export default Contact
