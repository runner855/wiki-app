import React, { useEffect, useState } from "react";
import SearchCall from "../../SearchApi/SearchCall";
import { WikiDataProps } from "../../types/Apptypes";
import { Card } from "antd";
import "../Search/Search.css";

export const Search = () => {
  const [wikiData, setWikiData] = useState<WikiDataProps[] | undefined>();

  useEffect(() => {
    SearchCall.get("steve jobs", {}).then((res) => {
      setWikiData(res.data.query.search);
      console.log(res.data.query.search);
    });
  }, []);
  return (
    <div className="data_container">
      <div className="title">My Wikipedia</div>
      <div className="search_input">
        <input type="search" placeholder="Search..." />
      </div>
      <div>
        {wikiData &&
          wikiData.map((item, index) => {
            return (
              <div className="site-card-border-less-wrapper">
                <Card
                  title={item.title}
                  bordered={false}
                  style={{ width: 800, margin: 50 }}
                >
                  <p>{item.snippet}</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
};
