import { Select } from "antd";
import React, { useEffect, useState } from "react";
import TranslateCall from "../../SearchApi/TranslateCall";
import { TranslateLanguages } from "../../Utilities/utility";
import "../Translate/Translate.css";

type ResultProps = {
  translatedText: string;
  detectedSourceLanguage: string;
  value: string | undefined;
  translations: [];
};

export const Translate = () => {
  const [word, setWord] = useState<string>("");
  const [result, setResult] = useState<ResultProps[]>();
  const [value, setValue] = useState<string>("en");

  useEffect(() => {
    TranslateCall.get(
      `v2?q=${word}&target=${value}&key=${process.env.REACT_APP_API_KEY}`,
      {}
    ).then((res) => {
      setResult(res.data.data.translations);
    });
  }, [word, value]);

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
          defaultValue={TranslateLanguages[1].value}
          onChange={() => setValue(value)}
          options={TranslateLanguages}
        ></Select>
      </div>
      <h1>
        {result &&
          result.map((item, index) => {
            return <span key={index}>{item.translatedText}</span>;
          })}
      </h1>
    </div>
  );
};
