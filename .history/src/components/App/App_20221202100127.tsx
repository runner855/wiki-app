import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Quotes } from "../Quotes/Quotes";
import { NavBar } from "../NavBar/NavBar";
import { Search } from "../Search/Search";
import { Translate } from "../Translate/Translate";
import "./App.css";
import { Authors } from "../Authors/Authors";
console.log(process.env);
function App() {
  return (
    <div className="App">
      <h1>Wiki App</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/quotes" />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/search" element={<Search />} />
        <Route path="/translate" element={<Translate />} />
      </Routes>
    </div>
  );
}

export default App;
