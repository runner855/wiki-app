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
          <div className="header">
            <div className="container">
              <ul>
                <li>{item.nav_element}</li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NavBar;
