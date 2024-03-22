import React from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar-before-login/Navbar";
import "./Login.css";

const Register = () => {
  return (
    <div class="login">
      <Navbar />
      <div class="logincontainer">
        <h1 class="login-header">REGISTER</h1>
        <p id="login-desc">
          Greetings! Welcome to this wonderful journey with us.
        </p>
        <div class="credential-container">
          <form action="">
            <div className="Input-Container">
              <label htmlFor="">Email Address: </label>
              <br></br>
              <input
                type="email"
                placeholder="--Enter your email address--"
                className="input-Box"
              />
            </div>

            <div className="Input-Container">
              <label htmlFor="">Password: </label>
              <br></br>
              <input
                type="password"
                placeholder="--Enter your password--"
                className="input-Box"
              />
            </div>

            <div className="Input-Container">
              <label htmlFor="">Referral Code: </label>
              <br></br>
              <input
                type="text"
                placeholder="--Enter your referral code--"
                className="input-Box"
              />
            </div>

            <Link to="/login">
              <button className="btn">Register</button>
            </Link>

            <div className="Input-Container">
              <span>
                <Link to="/login">Already have an acount ? Let's go !</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
