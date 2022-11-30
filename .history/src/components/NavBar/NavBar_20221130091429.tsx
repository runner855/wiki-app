import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavElements } from "../../Utilities/utility";
import "../NavBar/NavBar.css";
import { AppUrls } from "../../types/Apptypes";

export const NavBar = () => {
  return (
    <header className="header">
      {NavElements.map((item, index) => {
        return (
          <ul>
            <li>{item.nav_element}</li>
          </ul>
        );
      })}
    </header>
  );
};

export default NavBar;
