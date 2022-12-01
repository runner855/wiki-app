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

  useEffect(() => {
    SearchCall.get("steve jobs", {}).then((res) => {
      setWikiData(res.data.query.search);
      console.log(res.data.query.search);
    });
  }, []);

  useEffect(() => {});

  return (
    <div className="data_container">
      <div className="title">My Wikipedia</div>
      <FilterSearch
        value={InputValue}
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
                style={{ width: 600, margin: 50 }}
              >
                <p>{item.snippet.replace(/<\/?span[^>]*>/g, "")}</p>
                <p>{moment(item.timestamp).format("LL")}</p>
                <Link to={`https://it.wikipedia.org?curid=${item.pageid}`}>
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
