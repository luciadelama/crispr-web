import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className='logo' />

      <div className="navbar-right">
        <ul className="navbar-menu">
          <li>Technology</li>
          <li>Team</li>
        </ul>
        <button>Contact Us</button>
      </div>
    </div>
  )
}

export default Navbar
