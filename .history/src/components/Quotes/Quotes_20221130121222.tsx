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
            <Panel header={item.quote_title.en} key={"item"}>
              <p>{item.quote_content}</p>
              <img
                className="author_image"
                src={item.author_image}
                alt="author_image"
              />
            </Panel>
          </Collapse>
        );
      })}
    </div>
  );
};
