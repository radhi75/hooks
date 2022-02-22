import React, { useState } from "react";
import { moviesData } from "./Constants/Data";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Feature from "./Components/Feature/Feature";
import Search from "./Components/Search/Search";
import MovieList from "./Components/MovieList/MovieList";
import AddMovie from "./Components/AddMovie/AddMovie";
import Ratesearch from "./Components/Ratesearch/Ratesearch";

function App() {
  const [Data, setData] = useState(moviesData);
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const addMovieCallback = (newfilm) => {
    return setData([...Data, newfilm]);
  };

  return (
    <div className="App">
      <Navbar />
      <Feature />
      <Search setName={setName} />
      <Ratesearch setValue={setValue} value={value}/>
      <AddMovie addMovieCallback={addMovieCallback} />
      <MovieList movies={Data} name={name} value={value} />

      <Footer />
    </div>
  );
}

export default App;
