import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import './Contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
      <article className="contact__option">
      <AiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>yaaqout@gmail.com</h5>
          <a href="#anything">Send a message</a>
      </article>
      <article className="contact__option">
      <RiMessengerLine  className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Yaaqout tareq</h5>
          <a href="#anything">Send a message</a>
      </article>
      <article className="contact__option">
      <FaWhatsapp  className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+20123456789</h5>
          <a href="#anything">Send a message</a>
      </article>
        </div>
        <form action="">
          <input type="text" name='name'  placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

