import React from "react";
import { NavElements } from "../../Utitlities/utility";

export const NavBar = () => {
  return (
    <div className="NavBar_container">
      {NavElements.map((item, index) => {
        return (
          <nav className="nav">
            <div className="container">
              <li>{item}</li>
            </div>
          </nav>
        );
      })}
    </div>
  );
};

export default NavBar;
