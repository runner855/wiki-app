import React, { useEffect, useState } from "react";
import SearchCall from "../../SearchApi/SearchCall";
import { WikiDataProps } from "../../types/Apptypes";
import { Card } from "antd";
import moment from "moment";
import "../Search/Search.css";
import { FilterSearch } from "../FilterSearch/FilterSearch";
import {
  SEARCH_PAGE_TITLE,
  VIEW_ARTICLE_BUTTON,
} from "../../constants/dictionary";
import { LanguageEnum } from "../../types/Apptypes";

type SearchProps = {
  languages: LanguageEnum;
};

export const Search = ({ languages }: SearchProps) => {
  const [wikiData, setWikiData] = useState<WikiDataProps[] | undefined>();
  const [InputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    InputValue.length >= 2 &&
      SearchCall.get(
        `api.php?action=query&list=search&format=json&origin=*&srsearch=${InputValue}`,
        {}
      ).then((res) => {
        setWikiData(res.data.query.search);
      });
  }, [InputValue]);
  return (
    <div className="data_container">
      <div className="title">{SEARCH_PAGE_TITLE[languages]}</div>
      <FilterSearch
        inputValue={InputValue}
        setInputValue={(inputValue: string) => setInputValue(inputValue)}
      />
      <div className="cards_container">
        {wikiData &&
          wikiData.map((item, index) => {
            return (
              <Card
                className="card"
                title={item.title}
                bordered={false}
                key={index}
              >
                <p className="content">
                  {item.snippet.replace(/<\/?span[^>]*>/g, "")}
                </p>
                <p className="date">{moment(item.timestamp).format("LL")}</p>

                <a
                  href={`https://en.wikipedia.org?curid=${item.pageid}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="article">
                    {VIEW_ARTICLE_BUTTON[languages]}
                  </button>
                </a>
              </Card>
            );
          })}
      </div>
    </div>
  );
};
