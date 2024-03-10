import React from "react";
import Navbar2 from "./components/navbar/Navbar2";
import SearchBar from "./components/search-bar/SearchBar";
import ExploreList from "./components/explore-list/ExploreList";
import chatbot from "./assets/chatbot-ic.png";
import addExplore from "./assets/add-explore.png";
import "./Community.css";

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
          <btn>
            <img className="float-icon" src={chatbot} alt="ChatBot" />
          </btn>
          <btn>
            <img className="float-icon" src={addExplore} alt="Add Post" />
          </btn>
        </div>
      </div>
    </div>
  );
};

export default Community;
