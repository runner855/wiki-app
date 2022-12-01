import { Select } from "antd";
import * as React from "react";
import { QuoteTexts } from "../../Utilities/utility";

export const Authors = () => {
  return (
    <div className="authors_container">
      <Select>
        {QuoteTexts.map((item, index) => {
          return (
            <Option value={item.author_name.en}>{item.author_name.en}</Option>
          );
        })}
      </Select>
    </div>
  );
};
