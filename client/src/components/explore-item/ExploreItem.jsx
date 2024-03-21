import React from "react";
import { Link } from "react-router-dom";
import "./ExploreItem.css";

const ExploreItem = ({ id, pfp, username, pic, title, desc }) => {
  return (
    <>
      <Link to={`/community/${id}`}>
        <div className="explore-container">
          <img className="explore-pic-crop" src={pic} alt="Explore Pic" />
          <h3 className="explore-title">{title}</h3>
          <div className="explore-profile-name">
            <img
              className="explore-profile-pic"
              src={pfp}
              alt="Explore Prolie Pic"
            />
            <div className="explore-name">{username}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ExploreItem;
