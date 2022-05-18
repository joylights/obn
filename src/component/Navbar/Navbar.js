import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'


function Navbar() {
  return (
    <div className='main-nav'>
      
      <header className='container'>
          <img className='logo' src={Logo} alt='logo'/>
          <nav>
            <ul className='Nav_links'>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Services</a></li>
              <li><a href='#'>Projects</a></li>
            </ul>
          </nav>
          <a className='cta' href='#'><button>Contact Us</button></a>
      </header>
    </div>
  )
}

export default Navbar