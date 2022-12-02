import React, { useState } from "react";
import { AuthorsList } from "../../Utilities/utility";
import { Select } from "antd";
import "../Authors/Authors.css";

export const Authors = () => {
  const [author, setAuthor] = useState("");
  const handleChange = (value: string) => {
    setAuthor(value);
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
        <p className="selected_item">{author}</p>
      </div>
    </div>
  );
};
