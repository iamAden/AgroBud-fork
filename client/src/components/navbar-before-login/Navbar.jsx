import React,{useState} from "react";
import "./Navbar.css";
import Hero from "../../components/hero/Hero.jsx"
import logowtext from "../../assets/logowithtext.png";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
//npm install react-router-hash-link in terminal
const Navbar = () => {

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
      <li><HashLink to="/#home">Home</HashLink></li>
        <li><HashLink to="/#courses">Courses</HashLink></li>
        <li><HashLink to="/#community">Community</HashLink></li>
        <li><HashLink to="/#reward">Rewards</HashLink></li>
        <li><HashLink to="/#premium">Premium</HashLink></li>
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
