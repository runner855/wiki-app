import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavElements } from "../../Utilities/utility";
import "../NavBar/NavBar.css";
import { Switch } from "antd";
import { LanguageEnum } from "../../types/Apptypes";

export const NavBar = () => {
  const [language, setLanguage] = useState<boolean>(true);

  const onChange = (checked: boolean) => {
    setLanguage(checked);
  };

  return (
    <ul className="nav_container">
      {NavElements.map((item, index) => {
        return (
          <li>
            <Link to={item.to} key="key">
              {language
                ? item.nav_element.en
                : item.nav_element.it || item.nav_element.en}
            </Link>
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
