import React, { useState } from "react";
import { QuoteTexts } from "../../Utilities/utility";
import { Select } from "antd";
import { AUTHOR_ONE } from "../../constants/dictionary";

export const Authors = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="container">
      <div className="select">
        <Select style={{ width: 180 }}>
          {QuoteTexts.map((item, index) => {
            return <option>{item.author_name.en}</option>;
          })}
        </Select>
      </div>
      <div>
        <p>Selected text here</p>
      </div>
    </div>
  );
};
