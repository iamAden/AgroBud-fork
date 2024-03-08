import React from 'react'
import './Hero.css'
import illustration1 from '../../assets/illustration.png'

const Hero = () => {
  return (
      <div>
        <div >
          <div className='hero-big'>
            <div className='hero-text'>
              <h1>The best online platform where farmers learn and connect </h1>
              <button className='hero-btn'>Get Started</button>
            </div>
            <img src={illustration1} className='illustration'></img>
            
          </div>
        </div>
        <div className='course-section'>
          <h1>Learn from Personalised Online Courses</h1>
        </div>
      </div>
      
  )
}

export default Hero
