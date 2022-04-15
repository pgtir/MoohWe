import React from "react";

function CardItem({itemProp}) {
  return (
      <article className="card-item shadow-sm">
        <div className="card-image">
        <img src={`https://image.tmdb.org/t/p/w500/${ itemProp && itemProp.poster_path}`} alt="djrioeuo"/>
        </div>
        <div className="card-info p-1 px-2">
         <div className="title text-center">{itemProp.title}</div>
         <div className="votes text-center">Votes : {itemProp.vote_count}</div>
        </div>
      </article>
  );
}

export default CardItem;
