import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import './Header.css'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
    <a href="#contact"><FaLinkedin /></a>
    <a href="#contact"><FaGithub /></a>
    <a href="#contact"><FaDribbble /></a>
      
    </div>
  )
}

export default HeaderSocial
