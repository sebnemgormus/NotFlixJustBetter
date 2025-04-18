import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from '../../assets/search_icon.svg'


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
      setSearchOpen(false);
    }
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className={`search-container ${searchOpen ? "active" : ""}`}>
      <img
        src={searchIcon}
        className="icons search-icon"
        alt="search icon"
        onClick={toggleSearch}
      />
      <input
        type="text"
        className={`search-input ${searchOpen ? "visible" : ""}`}
        placeholder="Titles, people, genres"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleSearchKeyDown}
      />
    </div>
  );
};

export default SearchBar;
