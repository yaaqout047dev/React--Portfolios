import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { GrServicePlay } from "react-icons/gr";

import './Services.css'

const ServicesData = [
  {
    s_no : '01',
    s_name : 'Web design',
    s_desc : 'Web development is the process of building , anything....'
  },
  {
    s_no : '02',
    s_name : 'Graphics design',
    s_desc : 'Web development is the process of building , anything....'
  },
  {
    s_no : '03',
    s_name : 'Social media',
    s_desc : 'Web development is the process of building , anything....'
  },
  {
    s_no : '04',
    s_name : 'App design',
    s_desc : 'Web development is the process of building , anything....'
  },
  {
    s_no : '05',
    s_name : 'Web Security',
    s_desc : 'Web development is the process of building , anything....'
  },
  {
    s_no : '06',
    s_name : 'Software Testing',
    s_desc : 'Web development is the process of building , anything....'
  },
]
const Services = () => {
  return (
    <div id='services' className="services">
      <div className="services-title">
        <h2>My Services</h2>
        <GrServicePlay  className='ser-icon'/>
      </div>
      <div className="services-container">
        {ServicesData.map((service,index)=>{
          return <div key={index} className='services-format'>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readMore">
              <p>Read More</p>
              <FaArrowRight className='arrow-icon'/>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services
