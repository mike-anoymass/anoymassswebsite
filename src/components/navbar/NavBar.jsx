import React, { useState } from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import "./navbar.css" 

import logo from '../../assets/logo.svg'

const Menu = () =>  (
  <>  
    <p><a href="#home">Hello!</a></p>
    <p><a href="#who">Who?</a></p>
    <p><a href="#what">What?</a></p>
    <p><a href="#how">How?</a></p>
    <p><a href="#contact">Where?</a></p>
  </>
)


function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='soft__navbar'>
      <div className='soft__navbar-links'>
        <div className='soft__navbar-links_logo'>
          <p>ANOYMASSTech</p>
        </div>
        <div className="soft__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="soft__navbar-sign">
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className="soft__navbar-menu">
        {toggleMenu 
          ? <RiCloseLine size={40} color='white' onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line size={40} color='white' onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu && (
            <div className="soft__navbar-menu_container scale-up-center">
              <Menu />
              <div className="soft__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default NavBar