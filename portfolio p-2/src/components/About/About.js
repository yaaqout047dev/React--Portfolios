import React from 'react'
import myImg from '../../imgs/Yaaqout1.jpeg'
import logoImg from '../../imgs/Yaaqout-Logo.png'
import './About.css'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={logoImg} alt="logo" className='logo-img'/>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={myImg} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I'm an experienced Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cupiditate tenetur neque in accusamus maiores.</p>
            <p>My passion for frontend Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda esse vel possimus quam facilis sapiente similique. Sed, aperiam!</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width: '50%'}}/></div>
            <div className="about-skill"><p>React Js</p><hr style={{width: '70%'}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width: '60%'}}/></div>
            <div className="about-skill"><p>Next Js</p><hr style={{width: '50%'}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h2>2+</h2>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h2>30+</h2>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h2>15+</h2>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  )
}

export default About
