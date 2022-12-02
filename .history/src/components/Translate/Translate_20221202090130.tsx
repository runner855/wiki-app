import { Select } from "antd";
import React from "react";
import "../Translate/Translate.css";

export const Translate = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="translate_container">
      <h3>Translator</h3>
      <input type="search" />
      <div className="selector">
        <Select
          className="translate_select"
          style={{ width: 240 }}
          defaultValue="Choose A Language"
          onChange={handleChange}
        ></Select>
      </div>
    </div>
  );
};
