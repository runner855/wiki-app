import * as React from "react";
import { QuoteTexts } from "../../Utilities/utility";

export const Authors = () => {
  return (
    <div className="authors_container">
      {QuoteTexts.map((item, index) => {
        return (
          <ul>
            <li>{item.author_name.en}</li>
          </ul>
        );
      })}
    </div>
  );
};
