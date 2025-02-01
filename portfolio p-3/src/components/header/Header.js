import React from 'react'
import Cta from './Cta'

import Me from '../../assets/Yaaqout1.jpeg'
import HeaderSocial from './HeaderSocial'
import './Header.css'
const Header = () => {
  return (
  <header>
    <div className="container header__container">
<h5>Hey There,</h5>
<h1>I'm Yaaqout Tareq</h1>
<h5>MERN Stack Developer</h5>
<Cta />
<HeaderSocial/>
<div className="me">
  <img src={Me} alt='me' />
</div>
<a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
  </header>
  )
}

export default Header
