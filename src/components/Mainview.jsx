import React from "react";
import Topbar from "./Topbar";
import axios from "axios";
import "./Mainview.css";
import CardItem from "./CardItem";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function Mainview({
  list,
  page,
  setPage,
  heading,
  setSearchKey,
  linkType,
  movie_id,
}) {

  const navigate = useNavigate();
  const location = useLocation();
  

  const detailsURL = `
  https://api.themoviedb.org/3/movie/${movie_id}?api_key=cee71b2be49038091e9a4d19e2f5343e&language=en-US`;

   const fetchDetails = async () => {
    const response = await axios.get(`${detailsURL}`);
    console.log(response.data)
   }
  function backpager() {
    if (page > 1) setPage(--page);
  }

  function detailsHandler(id) {
    navigate(`/movie-details/${linkType}/${id}`);
    console.log(location.pathname);
  }

  if (movie_id) fetchDetails();
    return (
      <section className=" mainview flex-fill px-4   py-3">
        <Topbar setSearchKey={setSearchKey} />
        <section className={`${heading ? "showcase-area  py-4" : "d-none"}`}>
          <div className="head">
            <span className="heading">{heading && heading}</span>
            <div className="head-icons">
              <FontAwesomeIcon
                onClick={backpager}
                icon={faCircleChevronLeft}
                className=" me-3 left-chevron shadow-sm"
              />
              <FontAwesomeIcon
                onClick={() => setPage(++page)}
                icon={faCircleChevronRight}
                className="right-chevron shadow-sm"
              />
            </div>
          </div>
          <article className="card-items">
            {list &&
              list.map((item) => (
                <div key={item.id} onClick={() => detailsHandler(item.id)}>
                  <CardItem itemProp={item} />
                </div>
              ))}
          </article>
        </section>
      </section>
    );
}

export default Mainview;
