import React from "react";
import { useState } from "react";
import ExploreItem from "../explore-item/ExploreItem";
import "./ExploreList.css";

const ExploreList = () => {
  const [query, setQuery] = useState("");

  return (
    <div class="explore-list-container">
      <ExploreItem />
      <ExploreItem />
      <ExploreItem />
      <ExploreItem />
      <ExploreItem />
    </div>
  );
};

export default ExploreList;
