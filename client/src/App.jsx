import React from "react";
import Navbar from "./components/navbar-before-login/Navbar";
import Hero from "./components/hero/Hero";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Login";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes> */}
    </div>
  );
};

export default App;
