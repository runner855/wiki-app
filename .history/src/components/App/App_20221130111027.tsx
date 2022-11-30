import React from "react";
import { Route, Routes } from "react-router-dom";
import { Quotes } from "../Quotes/Quotes";
import NavBar from "../NavBar/NavBar";
import { Search } from "../Search/Search";
import { Select } from "../Select/Select";
import { Translate } from "../Translate/Translate";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Wiki App</h1>
      <NavBar />
      <Routes>
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/select" element={<Select />} />
        <Route path="/search" element={<Search />} />
        <Route path="/translate" element={<Translate />} />
      </Routes>
    </div>
  );
}

export default App;
