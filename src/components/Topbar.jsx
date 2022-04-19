import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

function Topbar({setSearchKey}) {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  function handleSearch(e) {
    e.preventDefault();
    navigate(`/search/${searchText}`)
    setSearchKey(searchText);
  }
  
  return (
    <section className="top-bar">
      <div className="search-bar py-2 px-3 shadow-sm">
        <form onSubmit={handleSearch}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <input
            type="search"
            placeholder="Start typing to search..."
            onChange={(e) => setSearchText(e.target.value)}
            className="px-2"
          />
        </form>
      </div>
      
      <div className="right-top">
        <div className="bookmarks">
          <FontAwesomeIcon icon={faBookmark} className="star-icon me-2" />
          Bookmarks
        </div>
        <section className="mode">
          <span className="theme-name">Light Mode</span>
          <div className="theme-switcher ms-2 ">
            <div className="toggler"></div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Topbar;
