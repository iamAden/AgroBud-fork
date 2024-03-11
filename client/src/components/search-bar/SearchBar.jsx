import React from "react";
import { useState } from "react";
import "./SearchBar.css";
import searchIcon from "../../assets/search.png";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="search-bar">
      <input
        className="search-term"
        style={{ backgroundColor: "#CCE5E7" }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
      />
      <button type="submit" class="searchButton">
        <img id="search-icon" src={searchIcon} alt="Search Icon" />
      </button>
    </div>
  );
};

export default SearchBar;
