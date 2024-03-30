import "./Login.css";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar-before-login/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [referral, setReferral] = useState("");

  const navigate = useNavigate();

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // const fetchUsers = () => {
  //   axios.get("http://localhost:3002/api/auth/register").then((res) => {
  //     // console.log(res.data)
  //   });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3002/api/auth/register", {
        email,
        username,
        password,
        referral,
      })
      .then(() => {
        alert("Registration Successful");
        setEmail("");
        setUsername("");
        setPassword("");
        setReferral("");
        // fetchUsers();
        navigate("/login");
      })
      .catch((error) => {
        console.log("Unable to register user");
      });
  };

  return (
    <div className="login">
      <Navbar />
      <div className="logincontainer">
        <h1 className="login-header">REGISTER</h1>
        <p id="login-desc">
          Greetings! Welcome to this wonderful journey with us.
        </p>
        <div className="credential-container">
          <form onSubmit={handleSubmit}>
            <div className="Input-Container">
              <label>Email Address: </label>
              <br></br>
              <input
                type="email"
                placeholder="--Enter your email address--"
                className="input-Box"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="Input-Container">
              <label>Username: </label>
              <br></br>
              <input
                type="text"
                placeholder="--Enter your username--"
                className="input-Box"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="Input-Container">
              <label>Password: </label>
              <br></br>
              <input
                type="password"
                placeholder="--Enter your password--"
                className="input-Box"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="Input-Container">
              <label>Referral Code: </label>
              <br></br>
              <input
                type="text"
                placeholder="--Enter your referral code--"
                className="input-Box"
                value={referral}
                onChange={(e) => setReferral(e.target.value)}
              />
            </div>

            <button className="btn" type="submit">
              Register
            </button>

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
