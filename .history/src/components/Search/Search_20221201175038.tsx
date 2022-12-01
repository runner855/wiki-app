import React, { useEffect, useState } from "react";
import SearchCall from "../../SearchApi/SearchCall";
import { WikiDataProps } from "../../types/Apptypes";
import { Card } from "antd";
import moment from "moment";
import "../Search/Search.css";
import { Link } from "react-router-dom";
import { FilterSearch } from "../FilterSearch/FilterSearch";

export const Search = () => {
  const [wikiData, setWikiData] = useState<WikiDataProps[] | undefined>();
  const [InputValue, setInputValue] = useState<string>("");
  const [results, setResults] = useState<WikiDataProps[] | undefined>();

  useEffect(() => {
    const filteredArticles =
      wikiData &&
      wikiData.filter((item) =>
        item.title.toLowerCase().includes(InputValue.toLowerCase())
      );

    setResults(filteredArticles);
  }, [InputValue, wikiData]);

  useEffect(() => {
    SearchCall.get(`${InputValue}`, {}).then((res) => {
      InputValue.length >= 2 && setWikiData(res.data.query.search);
    });
  }, [InputValue]);

  return (
    <div className="data_container">
      <div className="title">My Wikipedia</div>
      <FilterSearch
        inputValue={InputValue}
        setInputValue={(inputValue: string) => setInputValue(inputValue)}
      />
      <div className="cards_container">
        {wikiData &&
          wikiData.map((item, index) => {
            return (
              <Card className="card" title={item.title} bordered={false}>
                <p>{item.snippet.replace(/<\/?span[^>]*>/g, "")}</p>
                <p>{moment(item.timestamp).format("LL")}</p>
                <Link to={`https://en.wikipedia.org?curid=${item.pageid}`}>
                  {" "}
                  <button>View Article</button>
                </Link>
              </Card>
            );
          })}
      </div>
    </div>
  );
};
