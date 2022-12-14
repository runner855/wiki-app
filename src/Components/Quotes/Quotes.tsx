import React from "react";
import { Collapse } from "antd";
import { QuoteTexts } from "../../Utilities/utility";
import "../Quotes/Quotes.css";
import { LanguageEnum } from "../../types/Apptypes";

type QuotesProps = {
  languages: LanguageEnum;
};

export const Quotes = ({ languages }: QuotesProps) => {
  const { Panel } = Collapse;
  return (
    <div className="quotes_container">
      <Collapse>
        {QuoteTexts.map((item, index) => {
          return (
            <Panel header={item.quote_title.en} key={index}>
              <p className="quote_text">{item.quote_content[languages]}</p>
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
