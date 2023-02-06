import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../moviecard/MovieCard";
import "./MovieList.scss";

const MovieList = () => {
  const movies = useSelector((state) => state.movieReducer.moviesObj);
  console.log(movies);
  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  const series = useSelector((state) => state.movieReducer.seriesObj);
  console.log(series);
  let renderSeries = "";
  renderSeries =
    series.Response === "True" ? (
      series.Search.map((s, index) => {
        return <MovieCard key={index} data={s} />;
      })
    ) : (
      <div className="movies-error">
        <h3>404 {series.Error}</h3>
      </div>
    );

  return (
    <div className="main-wrapper">
      <div className="movie-wrapper">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>

      <div className="series-wrapper">
        <h2>Shows</h2>
        <div className="series-container">{renderSeries}</div>
      </div>
    </div>
  );
};

export default MovieList;
