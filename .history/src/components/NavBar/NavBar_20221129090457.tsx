import React from "react";
import { NavElements } from "../../Utitlities/utility";

export const NavBar = () => {
  return (
    <div>
      {NavElements.map((item, index) => {
        return <div>{item}</div>;
      })}
    </div>
  );
};

export default NavBar;
