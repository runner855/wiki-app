import React from "react";
import { NavElements } from "../../Utitlities/utility";

export const NavBar = () => {
  return (
    <div className="NavBar_container">
      {NavElements.map((item, index) => {
        return (
          <nav>
            <li>{item}</li>
          </nav>
        );
      })}
    </div>
  );
};

export default NavBar;
