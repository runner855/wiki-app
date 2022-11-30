import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavElements } from "../../Utilities/utility";
import "../NavBar/NavBar.css";
import { AppUrls } from "../../types/Apptypes";

export const NavBar = () => {
  return (
    <div className="nav_container">
      <ul>
        <li>
          {NavElements.map((item, index) => {
            return <a>{item.nav_element}</a>;
          })}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
