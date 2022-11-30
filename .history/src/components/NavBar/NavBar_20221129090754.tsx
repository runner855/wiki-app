import React from "react";
import { NavElements } from "../../Utitlities/utility";

export const NavBar = () => {
  return (
    <div className="NavBar_container">
      {NavElements.map((item, index) => {
        return <div>{item}</div>;
      })}
    </div>
  );
};

export default NavBar;
