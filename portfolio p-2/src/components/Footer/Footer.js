import React from 'react'
import { FaUserEdit } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">

          <p>I'm Yaaqout tareq frontend developer from, Egypt with 2 years of experience Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
          <FaUserEdit />
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>	&copy; 2025 Yaaqout tareq . all rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
