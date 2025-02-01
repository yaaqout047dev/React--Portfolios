import React, { useState } from 'react'
import { BiHome } from "react-icons/bi";
import { LuUserRound } from "react-icons/lu";
import { LuNotebookText } from "react-icons/lu";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

import './Nav.css'

const Nav = () => {

  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#' ? 'active' : ''}><BiHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}><LuUserRound /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : ''}><LuNotebookText /></a>
      <a href="#services" onClick={()=> setActiveNav('#services')}  className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
