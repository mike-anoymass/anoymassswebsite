import React from 'react'
import './header.css'

import people from "../../assets/people.png"
import ai from "../../assets/tech.png"

function Header() {
  return (
    <div className='soft__header section__padding' id='home'>
      <div className="soft__header-content">
        <h1 className="gradient__text">
          Bring your ideas and let us build valuable tech solutions for you !
        </h1>
        <p>
         We develop mobile first applications
        </p>
        <div className="soft__header-content__input">
          <input type="email" placeholder='Lets get started with your email address'/>
          <button type='button'>Get Started</button>
        </div>

        <div className="soft__header-content__people">
          <img src={people} alt="" />
          <p>Our Clients</p>
        </div>
        </div>
      
        <div className="soft__header-content__ai">
          <img src={ai} alt="" />
        </div>
      
    </div>
  )
}

export default Header