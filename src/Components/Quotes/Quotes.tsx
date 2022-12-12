import React from "react";
import { Collapse } from "antd";
import { QuoteTexts } from "../../Utilities/utility";
import "../Quotes/Quotes.css";

export const Quotes = () => {
  const { Panel } = Collapse;
  return (
    <div className="quotes_container">
      <Collapse>
        {QuoteTexts.map((item, index) => {
          return (
            <Panel header={item.quote_title.en} key={index}>
              <p className="quote_text">{item.quote_content.en}</p>
              <img
                className="author_image"
                src={item.author_image}
                alt="author_image"
              />
            </Panel>
          );
        })}
      </Collapse>
    </div>
  );
};
