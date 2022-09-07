import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";


function CardItem({itemProp}) {
  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
  const image = "https://image.tmdb.org/t/p/w500/";
  return (
      <article className="card-item shadow-sm">
        <div className="card-image">
        <img src={itemProp.poster_path == null ? unavailable : `${image}${ itemProp.poster_path}`} alt={`${itemProp.title} Poster`}/>
        </div>
        <div className="card-info p-1 px-2">
         <div className="title text-center">{itemProp.title}</div>
         <div className="votes text-center">Rating : {itemProp.vote_average}/10
         {/* <FontAwesomeIcon icon={faStar} /> */}
         </div>
        </div>
      </article>
  );
}

export default CardItem;
