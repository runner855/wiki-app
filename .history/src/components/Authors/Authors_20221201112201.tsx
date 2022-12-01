import * as React from "react";
import { QuoteTexts } from "../../Utilities/utility";
import Select from "react-select";
import { AUTHOR_ONE } from "../../constants/dictionary";

const options = [
  { value: "blues", label: "Blues" },
  { value: "rock", label: "Rock" },
  { value: "jazz", label: "Jazz" },
  { value: "orchestra", label: "Orchestra" },
];

export const Authors = () => {
  return (
    <div className="authors_container">
      <Select options={AUTHOR_ONE.en} />
    </div>
  );
};
