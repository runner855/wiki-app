import React from "react";
import { Collapse } from "antd";
import { QuoteTexts } from "../../Utilities/utility";

const { Panel } = Collapse;

export const Quotes = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <div className="quotes_container">
      {QuoteTexts.map((item, index) => {
        return (
          <Collapse defaultActiveKey={["1"]} onChange={onChange}>
            <Panel header={item.quote_title} key={"item"}>
              <p>{item.quote_content}</p>
            </Panel>
          </Collapse>
        );
      })}
    </div>
  );
};
