import React from 'react';
import Navbar2 from './components/navbar/Navbar2';
import "./Rewards.css";
import { Link } from "react-router-dom";
import illustration1 from "./assets/coin.png";
import illustration2 from "./assets/farmer.png";
import promo1 from "./assets/promo-1.png";
import promo2 from "./assets/promo-2.jpg";
import promo3 from "./assets/promo-3.png";
import promo4 from "./assets/promo-4.png";
import promo5 from "./assets/promo-5.png";

const Rewards = () => {
  return (
    <div className="reward">
      <Navbar2/>
      <div className='reward-header'>
        <h1 id="reward-title">Rewards</h1>
      </div>
      
      <div className='frame-1'>
        <div className='frame-in-1'>
          <img src={illustration1} className="illustration-big-coin"></img>
          <p>17838 Coins</p>
        </div>
        <div className='frame-in-1'>
          <h2>Let’s collect the coin <br />and redeem the rewards</h2>
        </div>
        <div id='farmer-img'>
          <img src={illustration2} className="illustration"></img>
        </div>
      </div>

      <div className='frame-2'>
        <div className='title-reward'>
          <p>Reward</p>
        </div>
        <div className='frame-promo'>
          <button className='card-promo' id='card1'>
              <img src={promo1} className="promo"></img>
            <div className='require-coin'>
              <img src={illustration1} className="illustration-small-coin"></img>
              <p>110</p>
            </div>
          </button>

          <button className='card-promo'>
              <img src={promo2} className="promo"></img>
            <div className='require-coin'>
              <img src={illustration1} className="illustration-small-coin"></img>
              <p>150</p>
            </div>
          </button>

          <button className='card-promo'>
              <img src={promo3} className="promo"></img>
            <div className='require-coin'>
              <img src={illustration1} className="illustration-small-coin"></img>
              <p>150</p>
            </div>
          </button>

          <button className='card-promo'>
              <img src={promo4} className="promo"></img>
            <div className='require-coin'>
              <img src={illustration1} className="illustration-small-coin"></img>
              <p>125</p>
            </div>
          </button>

           <button className='card-promo'>
              <img src={promo5} className="promo"></img>
            <div className='require-coin'>
              <img src={illustration1} className="illustration-small-coin"></img>
              <p>110</p>
            </div>
          </button>

        </div>
      </div>

    </div>
  )
}

export default Rewards
