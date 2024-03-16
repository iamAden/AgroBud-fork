import React from 'react'
import Navbar2 from './components/navbar/Navbar2'
import "./Premium.css";
import Footer from "./components/Footer/Footer";
import { Link } from "react-router-dom";

const Premium = () => {
  return (
    <div className="premium">
      <Navbar2/>
      <div className="premium-container">
      <div className='premium-header'>
        <h1 id="premium-title">Premium</h1>
      </div>
      
      <div className='premium-frame'>
        <div className='premium-content'>
          <h1>Annual</h1>
          <div className='cost'>
            <h1>RM80</h1>
            <p>per year</p>
          </div>
          <p>Save RM40</p>
          <button className='btnSelect'>Select</button>
        </div>

        <div className='premium-content'>
          <h1>Semi-Annual</h1>
          <div className='cost'>
            <h1>RM50</h1>
            <p>per 6 months</p>
          </div>
          <p>Save RM10</p>
          <button className='btnSelect'>Select</button>
        </div>

        <div className='premium-content'>
          <h1>Monthly</h1>
          <div className='cost'>
            <h1>RM10</h1>
            <p>per month</p>
          </div>
          <button className='btnSelect'>Select</button>
        </div>

      </div>
      </div>
      <Footer/>
    </div>
    
  )
}

export default Premium
