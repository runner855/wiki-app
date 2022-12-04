import React from "react";
import { Collapse } from "antd";
import { QuoteTexts } from "../../Utilities/utility";
import "../Quotes/Quotes.css";

export const Quotes = () => {
  const { Panel } = Collapse;

  return (
    <div className="quotes_container">
      {QuoteTexts.map((item, index) => {
        return (
          <Collapse defaultActiveKey={index}>
            <Panel header={item.quote_title.en} key={index}>
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
