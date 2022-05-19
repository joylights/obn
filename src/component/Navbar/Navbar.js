import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'


function Navbar() {
  return (
    <div className='main-nav container'>
      
      <header className='container'>
          <img className='logo' src={Logo} alt='logo'/>
          <nav>
            <ul className='Nav_links my-auto'>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Projects</li>
            </ul>
          </nav>
          <a className='cta' href='#'><button>Contact Us</button></a>
      </header>
    </div>
  )
}

export default Navbar