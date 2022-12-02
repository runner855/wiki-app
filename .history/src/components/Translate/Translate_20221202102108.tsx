import { Select } from "antd";
import React, { useEffect, useState } from "react";
import TranslateCall from "../../SearchApi/TranslateCall";
import "../Translate/Translate.css";

console.log(process.env);

export const Translate = () => {
  console.log(process.env.REACT_APP_KEY);
  const [word, setWord] = useState("");
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    TranslateCall.get(
      `macchina&target=af&key=AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM`,
      {}
    ).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="translate_container">
      <h3>Translator</h3>
      <input
        type="search"
        placeholder="Search.."
        onChange={(e) => setWord(e.target.value)}
      />
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
