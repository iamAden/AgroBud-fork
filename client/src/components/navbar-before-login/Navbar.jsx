import React from "react";
import "./Navbar.css";
import logowtext from "../../assets/logowithtext.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container">
      <img src={logowtext} className="logo" alt="" />
      <ul>
        <li>Home</li>
        <li>Courses</li>
        <li>Community</li>
        <li>Rewards</li>
        <li>Premium</li>
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
