import React from "react";
import Navbar2 from "./components/navbar/Navbar2";
import SearchBar from "./components/search-bar/SearchBar";
import ExploreList from "./components/explore-list/ExploreList";
import uploadExplore from "./assets/add-explore.png";
import { Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ComData from "./CommunityData";
import Chatbot from "./components/chatbot/Chatbot";
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
        <ExploreList data={ComData} />
        <div className="float-buttons">
          <Link to="/community/upload">
            <btn>
              <img
                className="float-icon"
                src={uploadExplore}
                alt="Upload Explore"
              />
            </btn>
          </Link>
          <Chatbot />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
