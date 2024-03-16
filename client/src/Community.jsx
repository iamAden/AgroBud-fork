import React from "react";
import Navbar2 from "./components/navbar/Navbar2";
import SearchBar from "./components/search-bar/SearchBar";
import ExploreList from "./components/explore-list/ExploreList";
import chatbot from "./assets/chatbot-ic.png";
import uploadExplore from "./assets/add-explore.png";
import { Link } from "react-router-dom";
import "./Community.css";
import Footer from "./components/Footer/Footer";

const Community = () => {
  return (
    <div className="explore">
      <Navbar2 />
      <div className="explore-header">
        <h1 id="explore-title">Explore</h1>
        <div id="explore-searchbar">
          <SearchBar />
        </div>
      </div>
      <div className="explore-content">
        <ExploreList />
        <div className="float-buttons">
          <Link to="/chatbot">
            <btn>
              <img className="float-icon" src={chatbot} alt="ChatBot" />
            </btn>
          </Link>
          <Link to="/community/upload">
            <btn>
              <img
                className="float-icon"
                src={uploadExplore}
                alt="Upload Explore"
              />
            </btn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Community;
