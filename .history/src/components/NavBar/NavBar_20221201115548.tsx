import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavElements } from "../../Utilities/utility";
import "../NavBar/NavBar.css";
import { Switch } from "antd";
import { LanguageEnum } from "../../types/Apptypes";

export const NavBar = () => {
  const [language, setLanguage] = useState("");
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
      <div className="switch">
        {LanguageEnum.IT}
        <Switch defaultChecked onChange={onChange} className="switch_element" />
        {LanguageEnum.EN}
      </div>
    </ul>
  );
};
