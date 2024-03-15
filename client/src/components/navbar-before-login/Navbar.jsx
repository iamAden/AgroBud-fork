import React,{useState} from "react";
import "./Navbar.css";
import Hero from "../../components/hero/Hero.jsx"
import logowtext from "../../assets/logowithtext.png";
import { Link } from "react-router-dom";

const Navbar = ({ homeId, coursesId, communityId, rewardId, premiumId }) => {

  const[menuOpen,setMenuOpen]=useState(false);
  
  return (
    <nav className="container">
      <img src={logowtext} className="logo" alt="" />
      <div 
      className="menu" 
      onClick={()=>{
        setMenuOpen(!menuOpen);
      }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>


      <ul className={menuOpen?"open":""}>
        <li><a href={`#${homeId}`}>Home</a></li>
        <li><a href={`#${coursesId}`}>Courses</a></li>
        <li><a href={`#${communityId}`}>Community</a></li>
        <li><a href={`#${rewardId}`}>Rewards</a></li>
        <li><a href={`#${premiumId}`}>Premium</a></li>
        <li>
          <Link to="/login">
            <button className="nav-login-btn">Login</button>
          </Link>
        </li>   
      </ul>

    </nav>
  );
};

export default Navbar;
