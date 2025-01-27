import React from 'react'
import heroImg from '../../imgs/Yaaqout1.jpeg'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={heroImg} alt="Hero Img" />
      <h1><span>I'm Yaaqout Tareq , </span> Frontend developer based in EG.</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores facilis ex iure dicta corporis quisquam autem dolore modi assumenda totam?</p>

      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
