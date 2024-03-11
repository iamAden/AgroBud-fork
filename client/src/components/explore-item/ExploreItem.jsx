import React from "react";
import { useState } from "react";
import explorePic from "../../assets/explore-pic.jpg";
import explorePic2 from "../../assets/explore-pic-2.jpg";
import exploreProfile from "../../assets/explore-profile.png";
import "./ExploreItem.css";

const ExploreItem = () => {
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="explore-container">
        <img className="explore-pic-crop" src={explorePic} alt="Explore Pic" />
        <div className="explore-title">
          My wheat progress Day 129! My wheat progress Day 129! My wheat
          progress Day 129! #wheat #happy
        </div>
        <div className="explore-profile-name">
          <img
            className="explore-profile-pic"
            src={exploreProfile}
            alt="Explore Prolie Pic"
          />
          <div className="explore-name">Farmer Steve</div>
        </div>
      </div>

      <div className="explore-container">
        <img
          className="explore-pic-crop"
          src={explorePic2}
          alt="Explore Pic 2"
        />
        <div className="explore-title">
          My wheat progress Day 129! My wheat progress Day 129! My wheat
          progress Day 129! #wheat #happy My wheat progress Day 129! My wheat
          progress Day 129! My wheat progress Day 129! #wheat #happy
        </div>
        <div className="explore-profile-name">
          <img
            className="explore-profile-pic"
            src={exploreProfile}
            alt="Explore Prolie Pic"
          />
          <div className="explore-name">Farmer Steve</div>
        </div>
      </div>
    </>
  );
};

export default ExploreItem;
