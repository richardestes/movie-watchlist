import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveBackToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn">
            <i className="fa-fw far fa-eye" onClick={() => addMovieToWatched(movie)}></i>
          </button>
          <button className="ctrl-btn" onClick={() => removeMovieFromWatchlist(movie.id)}>
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveBackToWatchlist(movie)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>
          <button className="ctrl-btn" onClick={() => removeFromWatched(movie.id)}>
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};
