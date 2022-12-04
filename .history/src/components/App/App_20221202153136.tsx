import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Quotes } from "../Quotes/Quotes";
import { NavBar } from "../NavBar/NavBar";
import { Search } from "../Search/Search";
import { Translate } from "../Translate/Translate";
import "./App.css";
import { Authors } from "../Authors/Authors";
import { AppUrls } from "../../types/Apptypes";

export const App = () => {
  return (
    <div className="App">
      <h1>Wiki App</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to={AppUrls.QUOTES} />} />
        <Route path={AppUrls.QUOTES} element={<Quotes />} />
        <Route path={AppUrls.AUTHORS} element={<Authors />} />
        <Route path={AppUrls.SEARCH} element={<Search />} />
        <Route path={AppUrls.TRANSLATE} element={<Translate />} />
      </Routes>
    </div>
  );
};
