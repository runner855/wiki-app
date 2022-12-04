import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavElements } from "../../Utilities/utility";
import "../NavBar/NavBar.css";
import { Switch } from "antd";
import { LanguageEnum } from "../../types/Apptypes";
import { ENGLISH_LABEL, ITALIAN_LABEL } from "../../constants/dictionary";

type NavBarProps = {
  languages: LanguageEnum;
  setLanguages: () => void;
};

export const NavBar = ({ languages, setLanguages }: NavBarProps) => {
  return (
    <ul className="nav_container">
      {NavElements.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.to}>{item.nav_element[languages]}</Link>
          </li>
        );
      })}
      <div className="switch">
        {ENGLISH_LABEL[languages]}
        <Switch defaultChecked onChange={onChange} className="switch_element" />
        {ITALIAN_LABEL[languages]}
      </div>
    </ul>
  );
};
