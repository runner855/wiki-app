import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavElements } from "../../Utilities/utility";
import "../NavBar/NavBar.css";
import { AppUrls } from "../../types/Apptypes";

export const NavBar = () => {
  return (
    <div className="nav_container">
      <ul>
        {NavElements.map((item, index) => {
          return <li>{item.nav_element}</li>;
        })}
      </ul>
    </div>
  );
};

export default NavBar;
