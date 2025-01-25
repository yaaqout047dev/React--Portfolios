import React from 'react'
import './HeaderContent.scss'
export default function HeaderContent(props) {

  const {headerText, icon} = props 
  return (
    <div className='wrapper'>
      <h2>{headerText}</h2>
      <span>{icon}</span>
    </div>
  )
}
