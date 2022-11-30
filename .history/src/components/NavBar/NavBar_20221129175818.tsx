import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavElements } from "../../Utilities/utility";
import "../NavBar/NavBar.css";
import { AppUrls } from "../../types/Apptypes";

export const NavBar = () => {
  return (
    <header className="navbar">
      {NavElements.map((item, index) => {
        return (
          <nav>
            <div className="container">
              <ul>
                <li>
                  <Link to={AppUrls.COLLAPSE}>{item.nav_element}</Link>
                </li>
              </ul>
            </div>
          </nav>
        );
      })}
    </header>
  );
};

export default NavBar;
