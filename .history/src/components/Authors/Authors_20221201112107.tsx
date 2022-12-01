import * as React from "react";
import { QuoteTexts } from "../../Utilities/utility";
import Select from "react-select";

const options = [
  { value: "blues", label: "Blues" },
  { value: "rock", label: "Rock" },
  { value: "jazz", label: "Jazz" },
  { value: "orchestra", label: "Orchestra" },
];

export const Authors = () => {
  return (
    <div className="authors_container">
      <Select options={QuoteTexts} />
    </div>
  );
};
