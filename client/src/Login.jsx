import React from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar-before-login/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get("http://localhost:3002/register").then((res) => {
      console.log(res.data);
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3002/login", {
        email,
        password,
      });
      const token = response.data.token;
      alert("Login successful");
      setEmail("");
      setPassword("");
      fetchUsers();
      navigate("/home");
      window.location.reload();
      localStorage.setItem("token", token);
    } catch (error) {
      console.log("Login Error", error);
    }
  };

  return (
    <div class="login">
      <Navbar />
      <div class="logincontainer">
        <h1 class="login-header">LOGIN</h1>
        <p id="login-desc">
          Welcome Back! Ready to continue your journey with us.
        </p>
        <div class="credential-container">
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
