import React from 'react'
import HeaderContent from '../../components/pageHeaderContent/HeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import './Contact.scss'

export default function Contact() {
  return (
    <section id='contact' className='contact'>
    <HeaderContent  headerText='contact' icon={<BsInfoCircleFill size={40}/>}/>
        
        <div className='contact__content'>
          <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: 'translateX(-200px)'
          }}
          end={{
            transform: 'translateX(0px)'
          }}
          >
            <h3 className='contact__content__header-text'>
              Contact Profile
            </h3>
          </Animate>
          <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: 'translateX(200px)'
          }}
          end={{
            transform: 'translateX(0px)'
          }}
          >
            <div className="contact__content__form">
              <div className='contact__content__form__controlsWrapper'>
                <div>
                  <input required type="text" name='name' className='inputName' />
                  <label className='nameLabel' htmlFor='name'>Name</label>
                </div>
                <div>
                <input required type="text" name='email' className='inputEmail' />
                <label className='emailLabel' htmlFor='Email'>Email</label>
                </div>
                <div>
                <textarea rows='5' required type="text" name='description' className='inputDescription' />
                <label className='descriptionLabel' htmlFor='description'>Description</label>
                </div>
              </div>
              <button>Submit</button>
            </div>
          </Animate>
        </div>
    </section>
  )
}
