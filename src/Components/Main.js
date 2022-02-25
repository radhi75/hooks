import React from "react";
import Search from "./Search/Search";
import MovieList from "./MovieList/MovieList";
import AddMovie from "./AddMovie/AddMovie";
import Ratesearch from "./Ratesearch/Ratesearch";
import { moviesData } from "../Constants/Data";
import { useState } from "react";
import "./Main.css";

const Main = () => {
  const [Data, setData] = useState(moviesData);
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const addMovieCallback = (newfilm) => {
    return setData([...Data, newfilm]);
  };
  return (
    <div className="main">
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <Search setName={setName} />

      <Ratesearch setValue={setValue} value={value} />
      <AddMovie addMovieCallback={addMovieCallback} />
      <MovieList movies={Data} name={name} value={value} />
    </div>
  );
};

export default Main;
