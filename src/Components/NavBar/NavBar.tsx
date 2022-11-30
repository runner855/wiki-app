import React from "react";
import { Link } from "react-router-dom";
import { NavElements } from "../../Utilities/utility";
import "../NavBar/NavBar.css";
import { AppUrls } from "../../types/Apptypes";

export const NavBar = () => {
  return (
    <ul className="nav_container">
      {NavElements.map((item, index) => {
        return (
          <li>
            <Link to={item.to}>{item.nav_element}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBar;