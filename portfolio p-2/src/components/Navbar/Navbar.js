import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../imgs/Yaaqout1.jpeg'
import { FaArrowsLeftRight } from "react-icons/fa6";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menu,setMenu] = useState('home')
  const menuRef = useRef()

  const openMenu = () =>{
    menuRef.current.style.right ='0'
  }
  const closeMenu = () =>{
    menuRef.current.style.right ='-350px'
  }
  return (
    <div className='navbar'>
      
      <div className="logo">
      <img src={logo} alt="logo" />
      <p>Yaaqout</p>
      </div>
      <TiThMenu className='menu-icon' onClick={openMenu}/>
      <ul ref={menuRef} className='nav-menu'>
      <IoMdClose  className='menu-x-icon' onClick={closeMenu}/>
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu('home')}>Home</p></AnchorLink>{menu==='home'? <FaArrowsLeftRight className='links-icon'/> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu('about')}>About Me</p></AnchorLink>{menu==='about'? <FaArrowsLeftRight className='links-icon'/> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu('services')}>Services</p></AnchorLink>{menu==='services'? <FaArrowsLeftRight className='links-icon'/> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu('portfolio')}>Portfolio</p></AnchorLink>{menu==='portfolio'? <FaArrowsLeftRight className='links-icon'/> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu('contact')}>Contact</p></AnchorLink>{menu==='contact'? <FaArrowsLeftRight className='links-icon'/> : <></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
