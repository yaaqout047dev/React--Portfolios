import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Animate} from 'react-simple-animate'
import proImg from '../../images/Yaaqout1.jpeg'
import './Home.scss'
export default function Home() {

  const navigate = useNavigate()

  const contactPage =()=>{
    navigate('/contact')
  }



  return (
    <section id='home' className='home'>
      <Animate play duration={1.5} delay={1} start={{transform : "translateY(-550px)"}}
      end={{transform : "translateX(0px)"}}>
<div className="home__proImg">
    <img src={proImg} alt='profile img'/>
    </div>
      </Animate>
    
    
      <div className="home__text-wrapper">
        <h1> Hey There , I'm Yaaqout <br /> Front End  developer</h1>
      </div>

      <Animate play duration={1.5} delay={1} start={{transform : "translateY(550px)"}}
      end={{transform : "translateX(0px)"}}>
      <div className="home__contact-me">
        <button onClick={contactPage}>Contact</button>
      </div>
      </Animate>
    
    </section>
  )
}
