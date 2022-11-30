import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavElements } from "../../Utitlities/utility";
import "../NavBar/NavBar.css";

export const NavBar = () => {
  return (
    <header className="navbar">
      {NavElements.map((item, index) => {
        return (
          <nav>
            <div className="container">
              <ul>
                <li>{item}</li>
              </ul>
            </div>
          </nav>
        );
      })}
    </header>
  );
};

export default NavBar;
