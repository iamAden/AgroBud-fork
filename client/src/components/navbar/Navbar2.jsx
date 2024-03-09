import React from "react";
import "./Navbar2.css";
import logowtext from "../../assets/logowithtext.png";
import profile from "../../assets/profile-default.png";

const Navbar2 = () => {
  //default name
  let name = "User123";

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
          <div className="navprofile">
            <div style={{ fontWeight: "bold" }}>{name}</div>
            <img src={profile} id="nav-profilepic" alt="Profile Pic"></img>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar2;
