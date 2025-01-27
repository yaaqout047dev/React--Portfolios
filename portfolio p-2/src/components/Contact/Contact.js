import React from 'react'
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import './Contact.css'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h2>Get in touch</h2>
        <MdOutlineConnectWithoutContact className='title-icon'/>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Let's talk</h2>
          <p>I'm currently available to take on new projects, Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corporis accusantium minus! </p>
          <div className="contact-details">
            <div className="contact-detail">
              <HiOutlineMail className='icon'/>
              <p>yaaqoutdev@gmail.com</p>
            </div>
            <div className="contact-detail">
              <IoMdCall className='icon'/>
              <p>+20123456789</p>
            </div>
            <div className="contact-detail">
              <CiLocationOn className='icon'/>
              <p>Cairo, Egypt</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" name="name" placeholder='Enter your name' />
          <label htmlFor="">Your Email</label>
          <input type="email" name="email" placeholder='Enter your email' />
          <label htmlFor="">Your Message</label>
          <textarea name="message" rows='8' placeholder='Enter your message' />
          <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
