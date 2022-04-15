import React from "react";
import Sidebar from "./Sidebar";
import Mainview from "./Mainview";
import { useState, useEffect } from "react";
import axios from "axios";

function Layout({ movieType, heading }) {
  const [page, setPage] = useState(1);
  const [pageSearch, setPageSearch] = useState(1);
  // const [isSearchPage, setIsPageSearch] = useState(false);

  const [list, setList] = useState();
  const [searchKey, setSearchKey] = useState();

  const API_KEY = "cee71b2be49038091e9a4d19e2f5343e";
  const SERVER_URL = "https://api.themoviedb.org/3";
  console.log(API_KEY);
  const searchURL = `${SERVER_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchKey}&page=${pageSearch}&include_adult=false`;
  const recommendedURL = `${SERVER_URL}/movie/${movieType}?api_key=${API_KEY}&language=en-US&page=${page}`;

  const fetchMovies = async () => {
    const response = await axios.get(`${searchKey ? searchURL : recommendedURL}
        `);
    console.log(response.data);
    setList(response.data.results);
  };

  useEffect(() => {
    fetchMovies();
    setSearchKey(null);
  }, [page, searchKey]);
  function setSearchKeyHandler(sKey) {
    setSearchKey(sKey);
  }
  console.log(searchKey);
  return (
    <main>
      <Sidebar movieType={movieType} />
      <Mainview
        list={list}
        page={searchKey ? pageSearch : page}
        setPage={setPage}
        heading={heading}
        setSearchKey={setSearchKeyHandler}
        // setIsPageSearch={setIsPageSearch}
      />
    </main>
  );
}

export default Layout;
