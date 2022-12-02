import React, { useState } from "react";
import { AuthorsList, QuoteTexts } from "../../Utilities/utility";
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
          style={{ width: 240 }}
          defaultValue="Select an Author"
          onChange={handleChange}
          options={AuthorsList}
        ></Select>
      </div>
      <div>
        <p className="selected_item">Selected text here</p>
      </div>
    </div>
  );
};
