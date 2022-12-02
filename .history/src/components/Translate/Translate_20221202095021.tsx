import { Select } from "antd";
import React, { useEffect, useState } from "react";
import TranslateCall from "../../SearchApi/TranslateCall";
import "../Translate/Translate.css";

export const Translate = () => {
  const [word, setWord] = useState();
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    TranslateCall.get(`${InputValue}`, {}).then((res) => {
      InputValue.length >= 2 && setWikiData(res.data.query.search);
    });
  }, [InputValue]);

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
