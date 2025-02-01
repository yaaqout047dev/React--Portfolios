import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbPentagonNumber7 } from "react-icons/tb";
import './Footer.css'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#any" className='footer__logo'>Yaaqout<TbPentagonNumber7 className='yaaqout-icon'/></a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="#face"><FaFacebookF /></a>
        <a href="#insta"><FaInstagram /></a>
        <a href="#x"><FaXTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; 2025 Yaaqout. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
