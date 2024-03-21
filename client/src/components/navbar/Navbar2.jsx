import React, { useState } from "react";
import "./Navbar2.css";
import logowtext from "../../assets/logowithtext.png";
import { Link } from "react-router-dom";
import profile from "../../assets/profile-default.png";
import Popup from "reactjs-popup";

const Navbar2 = () => {
  //default name
  let name = "User123";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="container">
      <img src={logowtext} className="logo" alt="" />

      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
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
          <Popup
            contentStyle={{ width: "450px", borderRadius: "20px" }}
            trigger={
              <div className="navprofile">
                <div id="nav-profilename">{name}</div>
                <img src={profile} id="nav-profilepic" alt="Profile Pic"></img>
              </div>
            }
            modal
            nested
          >
            {(close) => (
              <div>
                <div className="navprofile-popup">
                  <div>Log Out</div>
                  <div className="popup-buttons">
                    <button id="cancel-button" onClick={close}>
                      Cancel
                    </button>
                    <Link to="/">
                      <button id="yes-button">Yes</button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </Popup>
        </li>

        {/* <li>
          <div className="navprofile">
            <div id="nav-profilename">{name}</div>
            <img src={profile} id="nav-profilepic" alt="Profile Pic"></img>
          </div>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar2;
