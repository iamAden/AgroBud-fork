import React from "react";
import Navbar from "./components/navbar-before-login/Navbar";
import Hero from "./components/hero/Hero";
import Footer from "./components/Footer/Footer";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer/>
    </div>
  );
};

export default App;
