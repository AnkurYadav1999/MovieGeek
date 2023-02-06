import React, { useEffect } from "react";
import "./MovieDetail.scss";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAsyncMovieOrShowDetail,removeMovieOrShow } from "../../features/movies/movieSlice";
import { useSelector } from "react-redux";
import defaultImage from '../../images/images.png'
import { CircularProgress} from "@mui/material";


const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movieReducer.movieOrShowDetail);
  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(id));

    return ()=>{
      dispatch(removeMovieOrShow())
    }
  }, [dispatch, id]);

  return (
    <div className="movie-section">
    {Object.keys(data).length===0?
    (<div>
      <CircularProgress/>
    </div>)
    :
    (<>
      <div className="section-left">
          <div className="movie-title">{data.Title}</div>
          <div className="movie-rating">
            <span>
              IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
            </span>
            <span>
              IMDB Votes <i className="fa fa-thumbs-up"></i> : {data.imdbVotes}
            </span>
            <span>
              Runtime <i className="fa fa-film"></i> : {data.Runtime}
            </span>
            <span>
              Year <i className="fa fa-calendar"></i> : {data.Year}
            </span>
          </div>
          <div className="movie-plot">{data.Plot}</div>
          <div className="movie-info">
            <div>
              <span>Director</span>
              <span>{data.Director}</span>
            </div>
            <div>
              <span>Stars</span>
              <span>{data.Actors}</span>
            </div>
            <div>
              <span>Generes</span>
              <span>{data.Genre}</span>
            </div>
            <div>
              <span>Languages</span>
              <span>{data.Language}</span>
            </div>
            <div>
              <span>Awards</span>
              <span>{data.Awards}</span>
            </div>
          </div>
        </div>
        <div className="section-right">
          <img src={data.Poster==="N/A"?defaultImage:data.Poster} alt={data.Title} />
        </div>
    </>)}

    </div>
  );
};

export default MovieDetail;
