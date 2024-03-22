import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Login from "./Login";
import Home from "./Home";
import Courses from "./Courses";
import Community from "./Community";
import UploadCommunity from "./UploadCommunity.jsx";
import CommunityPage from "./CommunityPage.jsx";
import Rewards from "./Rewards.jsx";
import Premium from "./Premium";
import Lesson from "./Lesson.jsx";
import CoursePage from "./CoursePage.jsx";
import Register from "./Register.jsx";
import Hero from "./components/hero/Hero.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/:id" element={<CommunityPage />} />
        <Route path="/community/upload" element={<UploadCommunity />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/courses/:id" element={<CoursePage/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/hero" element={<Hero/>}/>
        <Route path="/courses/:id/:chapterid" element={<Lesson/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
