import React, { useState } from "react";
import { QuoteTexts } from "../../Utilities/utility";
import { Select } from "antd";
import { AUTHOR_ONE } from "../../constants/dictionary";
import "../Authors/Authors.css";

export const Authors = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="container">
      <div className="select">
        <Select
          style={{ width: 120 }}
          defaultValue="Select an Author"
          onChange={handleChange}
        >
          {QuoteTexts.map((item, index) => {
            return <option>{item.author_name.en}</option>;
          })}
        </Select>
      </div>
      <div>
        <p className="selected_item">Selected text here</p>
      </div>
    </div>
  );
};
