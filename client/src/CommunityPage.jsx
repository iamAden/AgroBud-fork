import React from "react";
import { Link, useParams } from "react-router-dom";
import comData from "./CommunityData";
import Navbar2 from "./components/navbar/Navbar2";
import back from "./assets/back.png";
import Footer from "./components/Footer/Footer";
import "./CommunityPage.css";

const CommunityPage = () => {
  const { id } = useParams();
  const comItem = comData.find((item) => item.id === parseInt(id));
  const { pfp, username, pic, title, desc } = comItem;

  return (
    <>
      <Navbar2 />
      {/* <div className="com-page-main"> */}
      <Link to="/community">
        <button id="back-to-com">
          <img id="back-icon" src={back} />
        </button>
      </Link>
      <div className="com-page-body">
        <img id="com-page-pic" src={pic} alt="Community Post Pic" />
        <div className="com-page-body-2">
          <h1 id="com-page-title">{title}</h1>
          <p id="com-page-desc">{desc}</p>
          <div className="com-profile-username">
            <img id="com-page-pfp" src={pfp} alt="Profile Pic" />
            <p id="com-page-username">{username}</p>
          </div>
        </div>
      </div>
      {/* </div> */}
      <Footer />
    </>
  );
};

export default CommunityPage;
