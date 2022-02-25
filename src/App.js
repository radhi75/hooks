import React, { useState } from "react";
import { moviesData } from "./Constants/Data";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Feature from "./Components/Feature/Feature";
import Main from "./Components/Main";
import { Routes, Route } from "react-router-dom";
import Trailer from "./Components/Trailer/Trailer";

function App() {
  const [Data, setData] = useState(moviesData);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Feature />} />
        <Route path="/Movies" element={<Main />}  className="mainsearch"/>

        <Route path="/MovieList/:id" element={<Trailer Data={Data} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
