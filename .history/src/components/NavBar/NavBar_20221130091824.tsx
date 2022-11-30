import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavElements } from "../../Utilities/utility";
import "../NavBar/NavBar.css";
import { AppUrls } from "../../types/Apptypes";

export const NavBar = () => {
  return (
    <div className="nav_container">
      {NavElements.map((item, index) => {
        return (
          <ul>
            <li>{item.nav_element}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default NavBar;
