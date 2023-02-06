import React from "react";
import "./MovieCard.scss";
import defaultImage from '../../images/images.png'
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  return (
    <Link to={`/movie/${data.imdbID}`}>
    <div className="card-container">
        <div className="movie-poster">
          <img src={data.Poster==="N/A"?defaultImage:data.Poster} alt="movie-poster" />
        </div>
        <div className="movie-title">
          <h4>{data.Title}</h4>
          <h5>{data.Year}</h5>
        </div>
    </div>
    </Link>
  );
};

export default MovieCard;
