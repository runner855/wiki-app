import { Select } from "antd";
import React, { useEffect, useState } from "react";
import TranslateCall from "../../SearchApi/TranslateCall";
import { TranslateLanguages } from "../../Utilities/utility";
import "../Translate/Translate.css";

export const Translate = () => {
  const [word, setWord] = useState<string>("");
  const [translate, setTranslate] = useState<string>("");

  const handleChange = (value: string) => {
    // console.log(`selected ${value}`);
    setTranslate(value);
    console.log(translate);
  };

  const handleInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setWord(e.target.value);
  };

  useEffect(() => {
    TranslateCall.get(
      `${word}&target=${translate}&key=AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM`,
      {}
    ).then((res) => {
      console.log(res.data.translations);
    });
  }, [word]);

  return (
    <div className="translate_container">
      <h3>Translator</h3>
      <input type="search" placeholder="Search.." onChange={handleInput} />
      <div className="selector">
        <Select
          className="translate_select"
          style={{ width: 240 }}
          defaultValue="Choose A Language"
          onChange={handleChange}
          options={TranslateLanguages}
        ></Select>
      </div>
      <h1>Text here</h1>
    </div>
  );
};
