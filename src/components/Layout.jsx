import React from "react";
import Sidebar from "./Sidebar";
import Mainview from "./Mainview";
import { useState, useEffect } from "react";
import axios from "axios";

function Layout({ linkType, heading, query }) {
  //  Defining States
  const [page, setPage] = useState(1);
  const [pageSearch, setPageSearch] = useState(1);
  const [isSearchPage, setIsPageSearch] = useState(false);
  const [list, setList] = useState();
  const [searchKey, setSearchKey] = useState(query);
  const [category, setCategory] = useState();
  
  // URLs and KEY
  const API_KEY = "cee71b2be49038091e9a4d19e2f5343e";
  const SERVER_URL = "https://api.themoviedb.org/3";
  const searchURL = `${SERVER_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchKey}&page=${pageSearch}&include_adult=false`;
  const recommendedURL = `${SERVER_URL}/movie/${linkType}?api_key=${API_KEY}&language=en-US&page=${page}`;
  const categoriesURL = `${SERVER_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${category && category.id}`
  const generesURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=cee71b2be49038091e9a4d19e2f5343e&language=en-US';
  
  // API CALLS
  const fetchGenres = async () => {
    const response = await axios.get(`${generesURL}`);
    const genres = response.data.genres;
    const reqGenre = genres.find((g) => g.name === linkType);
    if(reqGenre) setCategory(reqGenre);
  }
  
  const fetchMovies = async () => {
    let response;
    if(category) response = await axios.get(`${searchKey ? searchURL : categoriesURL}`)
    else response = await axios.get(`${searchKey ? searchURL : recommendedURL}`);
    setList(response.data.results);
  };
  
  // RENDERING COMPONENT
  useEffect(() => {
    fetchGenres();
    fetchMovies();
    if (searchKey) setIsPageSearch(true);
    else setIsPageSearch(false);
  }, [pageSearch, page, searchKey, category]);
  
  return (
    <main>
      <Sidebar 
      linkType={linkType} 
      />
      <Mainview
        list={list}
        page={isSearchPage ? pageSearch : page}
        setPage={isSearchPage ? setPageSearch : setPage}
        heading={heading}
        setSearchKey={setSearchKey}
      />
    </main>
  );
}

export default Layout;
