import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='MainBody' id='contact'>
        <h1>Contact us</h1>
        <form action="">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="naem" required/>

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required/>

            <label htmlFor="message">Message</label>
            <textarea name="message" id="message"  rows="5"></textarea>

            <input className='sub' type="submit" value="submit" />
        </form>
    </div>
  )
}

export default Contact