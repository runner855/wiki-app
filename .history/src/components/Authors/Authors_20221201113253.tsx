import React, { useState } from "react";
import { QuoteTexts } from "../../Utilities/utility";
import Select from "react-select";
import { AUTHOR_ONE } from "../../constants/dictionary";

export const Authors = () => {
  return (
    <div className="container">
      <div>
      <select>
        {QuoteTexts.map((item, index) => {
          return <option>{item.author_name.en}</option>;
        })}
      </select>
    </div>
 <div>
  hello 
 </div>
  );
 
  )
};
