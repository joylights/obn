import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero mt-1'>
        <div className='container hero-container'>
            <h1>IT Solutions & Business <br/> Services Company</h1>
            <p className='hero-p'>We Provide truly Prominent IT Soltions & Services <br/> for all your Business Needs.</p>
            <div className='buttons'>
            <a className='hero-cta' href='#'><button>Learn More</button></a>
            </div>
        </div>
    </div>
  )
}

export default Hero