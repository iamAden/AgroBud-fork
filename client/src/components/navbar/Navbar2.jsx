import React ,{useState} from "react";
import "./Navbar2.css";
import logowtext from "../../assets/logowithtext.png";
import profile from "../../assets/profile-default.png";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  //default name
  let name = "User123";
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
        <li>
          <Link to="/home">
            <button className="invisible-btn">Home</button>
          </Link>
        </li>
        <li>
          <Link to="/courses">
            <button className="invisible-btn">Courses</button>
          </Link>
        </li>
        <li>
          <Link to="/community">
            <button className="invisible-btn">Community</button>
          </Link>
        </li>
        <li>
          <Link to="/rewards">
            <button className="invisible-btn">Rewards</button>
          </Link>
        </li>
        <li>
          <Link to="/premium">
            <button className="invisible-btn">Premium</button>
          </Link>
        </li>

      

        <li>
          <div className="navprofile">
            <div id="nav-profilename">{name}</div>
            <img src={profile} id="nav-profilepic" alt="Profile Pic"></img>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar2;
