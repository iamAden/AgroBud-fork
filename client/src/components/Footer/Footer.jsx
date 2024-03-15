import React from 'react'
import './Footer.css'
import logo from './../../assets/agrobudlogo.png'

const Footer = () => {
  return (
    
    <div className='footer'>
        <img src={logo} id='logo'></img>
        <div>All Rights Reserved</div>
        <div>AgroBud</div>
        <i class="fa fa-github" aria-hidden="true"></i>
    </div>
  )
}

export default Footer
