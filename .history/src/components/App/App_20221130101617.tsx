import React from "react";
import { Route, Routes } from "react-router-dom";
import { Collapse } from "../Collapse/Collpse";
import NavBar from "../NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Wiki App</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Collapse />} />
      </Routes>
    </div>
  );
}

export default App;
