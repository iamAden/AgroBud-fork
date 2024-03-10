import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Login from "./Login";
import Home from "./Home";
import Courses from "./Courses";
import Community from "./Community";
import Rewards from "./Rewards.jsx";
import Premium from "./Premium";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route exact path="/" element={<App/>} />
          <Route  path="/login" element={<Login/>} />
          <Route  path="/home" element={<Home/>} />
          <Route  path="/courses" element={<Courses/>} />
          <Route  path="/community" element={<Community/>} />
          <Route  path="/rewards" element={<Rewards/>} />
          <Route  path="/premium" element={<Premium/>} />
        </Routes>
      </Router>
  </React.StrictMode>
);
