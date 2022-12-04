import React, { useState } from "react";
import { AuthorsList } from "../../Utilities/utility";
import { Select } from "antd";
import "../Authors/Authors.css";

export const Authors = () => {
  const [author, setAuthor] = useState("");

  return (
    <div className="container">
      <h1>Select An Author!!</h1>
      <div className="select">
        <Select
          className="translate_select"
          style={{ width: 240 }}
          defaultValue="Select"
          onChange={(value) => {
            setAuthor(value);
          }}
          options={AuthorsList(languages)}
        ></Select>
      </div>
      <div>
        <p className="selected_item">{author}</p>
      </div>
    </div>
  );
};
