import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar-before-login/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { updateUser } = useContext(AuthContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3002/api/auth/login",
        {
          email,
          password,
        }
      );
      // const token = response.data.token;
      alert("Login successful");
      setEmail("");
      setPassword("");
      navigate("/home");
      window.location.reload();

      // localStorage.setItem("token", token);
      updateUser(response.data);
    } catch (error) {
      console.log("Login Error", error);
    }
  };

  return (
    <div className="login">
      <Navbar />
      <div className="logincontainer">
        <h1 className="login-header">LOGIN</h1>
        <p id="login-desc">
          Welcome Back! Ready to continue your journey with us.
        </p>
        <div className="credential-container">
          <form onSubmit={handleLogin}>
            <div className="Input-Container">
              <label htmlFor="">Email Address: </label>
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
              <label htmlFor="">Password: </label>
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
              <div>
                <input type="checkbox" name="" if="" />
                <label htmlFor="Remember Me"> Remember Me</label>
              </div>
              <span id="forget">Forgot Password?</span>
            </div>

            <button className="btn" type="submit">
              Log In
            </button>

            <div className="Input-Container">
              <span>
                <Link to="/register">New Here ? Create an Account</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
