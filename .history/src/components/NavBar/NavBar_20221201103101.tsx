import React from "react";
import { Link } from "react-router-dom";
import { NavElements } from "../../Utilities/utility";
import "../NavBar/NavBar.css";
import { Switch } from "antd";
import { LanguageEnum } from "../../../.history/src/types/Apptypes_20221201102327";

export const NavBar = () => {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <ul className="nav_container">
      {NavElements.map((item, index) => {
        return (
          <li>
            <Link to={item.to}>{item.nav_element}</Link>
          </li>
        );
      })}
      {LanguageEnum.IT}
      <Switch defaultChecked onChange={onChange} />
      {LanguageEnum.EN}
    </ul>
  );
};
