import { Select } from "antd";
import React, { useEffect, useState } from "react";
import TranslateCall from "../../SearchApi/TranslateCall";
import "../Translate/Translate.css";

export const Translate = () => {
  const [word, setWord] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleChange = (value: string) => {
    // console.log(`selected ${value}`);
    setSelectedLanguage(value);
    console.log(selectedLanguage);
  };

  const handleInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setWord(e.target.value);
    console.log(word);
  };

  useEffect(() => {
    TranslateCall.get(
      `${word}&target=${value}&key=AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM`,
      {}
    ).then((res) => {
      console.log(res.data);
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
          options={[
            {
              value: "it",
              label: "Italiano",
            },
            {
              value: "en",
              label: "English",
            },

            {
              value: "af",
              label: "African",
            },
            {
              value: "ar",
              label: "Arabic",
            },
            {
              value: "hi",
              label: "Hindi",
            },
          ]}
        ></Select>
      </div>
      <h1>Text here</h1>
    </div>
  );
};
