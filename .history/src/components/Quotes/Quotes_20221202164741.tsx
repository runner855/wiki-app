import React from "react";
import { Collapse } from "antd";
import { QuoteTexts } from "../../Utilities/utility";
import "../Quotes/Quotes.css";

const { Panel } = Collapse;

export const Quotes = () => {
  return (
    <div className="quotes_container">
      {QuoteTexts.map((item, index) => {
        return (
          <Collapse defaultActiveKey={["1"]}>
            <Panel header={item.quote_title.en} key={"item"}>
              <p className="quote_text">{item.quote_content}</p>
              <img
                className="author_image"
                src={item.author_image.en}
                alt="author_image"
              />
            </Panel>
          </Collapse>
        );
      })}
    </div>
  );
};
