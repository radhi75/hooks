import React from "react";
import "./MovieCard.css";
import { Rating } from "@mui/material";
import { Link} from "react-router-dom";
const MovieCard = ({ movie }) => {
  return (
    <div className="wrapper">
      <img src={movie.image} alt="" className="poster" />
      <div className="description">
        <div className="details">
          <h1 className="title">{movie.name}</h1>
          <p className="gen">
            {movie.date} || {movie.type}{" "}
          </p>
          <Rating
            name="read-only"
            value={movie.rating}
            readOnly
            className="score"
          />
          <span className="para">{movie.description}</span>
        </div>
      </div>
      <div className="btn-watch">
      <Link to={`/MovieList/${movie.id}`} ><button className="watch" >WATCH TRAILER</button></Link>
      </div>
    </div>
  );
};

export default MovieCard;