import React, { useState } from "react";
import {
  AuthorsList,
  QuoteTexts,
  TranslateLanguages,
} from "../../Utilities/utility";
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
          className="translate_select"
          style={{ width: 240 }}
          defaultValue="Choose A Language"
          onChange={handleChange}
          options={AuthorsList}
        ></Select>
      </div>
      <div>
        <p className="selected_item">{value}</p>
      </div>
    </div>
  );
};
