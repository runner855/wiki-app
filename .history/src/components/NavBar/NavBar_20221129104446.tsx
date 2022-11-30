import React from "react";
import { NavElements } from "../../Utitlities/utility";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";

export const NavBar = () => {
  return (
    <div className="NavBar_container">
      {NavElements.map((item, index) => {
        return (
          <nav className="nav">
            <div className="container">
              <ul>
                <li>{item}</li>
              </ul>
            </div>
          </nav>
        );
      })}
    </div>
  );
};

export default NavBar;
