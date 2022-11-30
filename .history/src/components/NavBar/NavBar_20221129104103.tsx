import React from "react";
import { NavElements } from "../../Utitlities/utility";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="NavBar_container">
      {NavElements.map((item, index) => {
        return (
          <nav className="nav">
            <div className="container">
              <ul>
                <li>
                  <Link to="/">{item}</Link>
                </li>
              </ul>
            </div>
          </nav>
        );
      })}
    </div>
  );
};

export default NavBar;
