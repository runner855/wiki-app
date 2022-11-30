import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavElements } from "../../Utilities/utility";
import "../NavBar/NavBar.css";
import { AppUrls } from "../../types/Apptypes";

export const NavBar = () => {
  return (
   
      {NavElements.map((item, index) => {
        return (
          
              <li>
                <a href="/">{item.nav_element}</a>
              </li>
          
        );
      })}
   >
  );
};

export default NavBar;
