import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

function Topbar({ setSearchKey, setIsSearchPage }) {
  const [searchText, setSearchText] = useState("");
  function handleSearch() {
    console.log("there");
    setSearchKey(searchText);
  }
  // }
  return (
    <section className="top-bar">
      <div className="search-bar py-2 px-3 shadow-sm">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Start typing to search..."
            onChange={(e) => setSearchText(e.target.value)}
            className="px-2"
          />
        </form>
      </div>
      {searchText}
      <div className="right-top">
        <div className="bookmarks">
          <FontAwesomeIcon icon={faBookmark} className="star-icon me-2" />
          Bookmarks fg
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
