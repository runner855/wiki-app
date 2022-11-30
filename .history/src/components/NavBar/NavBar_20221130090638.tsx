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
          <nav className="header_nav">
            <ul className="header_list">
              <li>
                <a href="">{item.nav_element}</a>
              </li>
            </ul>
          </nav>
        );
      })}
    </header>
  );
};

export default NavBar;
