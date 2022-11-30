import React from "react";
import { Collapse } from "antd";
import { QuoteTexts } from "../../Utilities/utility";

const { Panel } = Collapse;

export const Quotes = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse defaultActiveKey={["1"]} onChange={onChange}>
      {QuoteTexts.map((item, index) => {
        return (
          <Panel header={item.quote_title} key={"item"}>
            <p>{item.quote_content}</p>
          </Panel>
        );
      })}
    </Collapse>
  );
};

{
  /* <Collapse defaultActiveKey={["1"]} onChange={onChange}>
      {QuoteTexts.map((item, index) => {
        return (
          <Panel header={item.quote_title} key={"item"}>
            <p>{item.quote_content}</p>
          </Panel>
        );
      })}
    </Collapse> */
}
