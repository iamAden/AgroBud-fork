import React from "react";
import "./Hero.css";
import illustration1 from "../../assets/home-illust1.png";
import illustration2 from "../../assets/home-illust2.png";
import illustration3 from "../../assets/home-illust3.png";
import illustration4 from "../../assets/home-illust4.png";
import illustration5 from "../../assets/home-illust5.png";

const Hero = () => {
  return (
    <>
      <div className="hero" id="home" >
        <div className="hero-big">
          <div className="hero-text" >
            <h1 >The best online platform where farmers learn and connect </h1>
            <button className="hero-btn">Get Started</button>
          </div>
          <img src={illustration1} className="illustration"></img>
        </div>
      </div>

      <div className="hero-two" id="courses" >
        <div className="hero-big">
          <img src={illustration2} className="illustration" ></img>
          <div className="hero-text">
            <h1 >Learn from Personalised Online Course</h1>
            <p>
              Our online courses are taught by our partnered professionals from
              UM. Be ready to learn about crop management such as sustainable
              management
            </p>
          </div>
        </div>

        <div className="hero-big" id="community">
          <div className="hero-text">
            <h1>Engage in Community Forum</h1>
            <p>
              A place where you can engage with the community. Gain knowledge
              from users alike and share you rown too!
            </p>
          </div>
          <img src={illustration3} className="illustration"></img>
        </div>
        
        <div className="hero-big" id="reward">
          <img src={illustration4} className="illustration"></img>
          <div className="hero-text">
            <h1>Stay motivated with our Reward System</h1>
            <p>
              Earn points by completing our course and being active in the
              community. Redeem your points for amazing rewards.
            </p>
          </div>
        </div>
        <div className="hero-big" id="premium">
          <div className="hero-text">
            <h1>Unlock Premium Features</h1>
            <p>Join our premium membership for exclusive courses and no ads!</p>
          </div>
          <img src={illustration5} className="illustration5"></img>
        </div>
      </div>
    </>
  );
};

export default Hero;
