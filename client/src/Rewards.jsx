import React,{useState} from 'react';
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
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
import Footer from './components/Footer/Footer';

const Rewards = () => {
  const [isRedeemDropdownOpen, setIsRedeemDropdownOpen]=useState(false);
  const [isTermsDropdownOpen, setIsTermsDropdownOpen]=useState(false);

  const toggleRedeemDropdown = () => {
    setIsRedeemDropdownOpen(!isRedeemDropdownOpen);
  };

  const toggleTermsDropdown = () => {
    setIsTermsDropdownOpen(!isTermsDropdownOpen);
  };

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
          <Popup trigger={<button className='card-promo'>
              <img src={promo1} className="promo"></img>
            <div className='require-coin'>
              <img src={illustration1} className="illustration-small-coin"></img>
              <p>110</p>
            </div>
          </button>} modal nested>
          
          {close => (
            <div className='overlay'>
              <div className='modalContainer'>
                <img src={promo1} className="promo1"></img>
                <div className="modalRight">
                    <button className="close" onClick={close}>X</button>
                      <div className="off-header"> 10% OFF an any handcrafted beverage purchase </div>
                      <div className="off-content">
                          <div className='dropdown-wrapper'>
                            <button className='dropdown-button' onClick={toggleRedeemDropdown}>How to redeem</button>
                            {isRedeemDropdownOpen && (
                            <div className='dropdown-content'>
                              Tap on Redeem. You will receive the voucher code. Please screenshot the code, once you tap OK, the code will not show again 
                            </div>
                            )}
                        </div>

                        <div className='dropdown-wrapper'>
                            <button className='dropdown-button' onClick={toggleTermsDropdown}>Terms and Conditions</button>
                            {isTermsDropdownOpen && (
                            <div className='dropdown-content'>
                             <ul>
                              <li>This voucher is valid until 24 December 2024, 11.59pm</li>
                              <li>Only valid for walk-in purchases at all brand stores</li>
                              <li>Not valid with any other vouchers, promotions, and discounts</li>
                              <li>The offer is not applicable to bottled drinks and seasonal drinks</li>
                            </ul>
                            </div>
                            )}
                        </div>
                        
                      </div>
                      <div className="actions">
                        <button className="BtnRedeem"> REDEEM </button>
                      </div>
                  </div>
              </div>
            </div>
    )}
          </Popup>

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
      <Footer/>
    </div>
  )
}

export default Rewards
