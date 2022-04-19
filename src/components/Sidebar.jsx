import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ linkType }) {
  const genreArray = [
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Family",
    "Thriller",
  ];
  
  return (
    <section className=" sidebar left-bar py-3 px-5 pe-4 shadow-sm">
      <div className="logo mb-4 ">MoohWe</div>
      <div className="profile mb-4">
        <div className="dp">
          <img
            src="https://randomuser.me/api/portraits/men/78.jpg"
            className="shadow-sm rounded-circle"
            alt="Display picture"
          ></img>
        </div>
        <div className="username">Alex Hawkins</div>
      </div>
      <article className="recommended mb-4">
        <span className="heading d-block">RECOMMENDED</span>
        <ul>
          <li className={`${linkType == "now_playing" ? "active" : " "}`}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: `${
                  linkType == "now_playing" ? "var(--blue)" : "var(--grey)"
                }`,
              }}
            >
              Streaming Now
            </Link>
          </li>
          <li className={`${linkType == "popular" ? "active" : " "}`}>
            <Link
              to="/popular"
              style={{
                textDecoration: "none",
                color: `${
                  linkType == "popular" ? "var(--blue)" : "var(--grey)"
                }`,
              }}
            >
              Popular
            </Link>
          </li>
          <li className={`${linkType == "top_rated" ? "active" : " "}`}>
            <Link
              to="/top-rated"
              style={{
                textDecoration: "none",
                color: `${
                  linkType == "top_rated" ? "var(--blue)" : "var(--grey)"
                }`,
              }}
            >
              Top Rated
            </Link>
          </li>
          <li className={`${linkType == "upcoming" ? "active" : " "}`}>
            <Link
              to="/upcoming"
              style={{
                textDecoration: "none",
                color: `${
                  linkType == "upcoming" ? "var(--blue)" : "var(--grey)"
                }`,
              }}
            >
              Upcoming
            </Link>
          </li>
        </ul>
      </article>
      <article className="recommended mb-4">
        <span className="heading d-block">CATEGORIES</span>
        <ul>
          {genreArray.map((genre) => {
            return (
              <li key={genre} className={`${linkType == `${genre}` ? "active" : " "}`}>
                <Link
                  to={`/${genre}`}
                  style={{
                    textDecoration: "none",
                    color: `${
                      linkType == `${genre}` ? "var(--blue)" : "var(--grey)"
                    }`,
                  }}
                >
                  {genre}
                </Link>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
}

export default Sidebar;
