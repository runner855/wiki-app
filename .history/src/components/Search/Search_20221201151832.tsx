import React, { useEffect, useState } from "react";
import SearchCall from "../../SearchApi/SearchCall";
import "../Search/Search.css";

export const Search = () => {
  const [wikiData, setWikiData] = useState<[] | undefined>();

  useEffect(() => {
    SearchCall.get("steve jobs", {}).then((res) => {
      setWikiData(res);
      console.log(wikiData);
    });
  }, []);
  return (
    <div className="data_container">
      <div className="title">My Wikipedia</div>
      <div className="search_input">
        <input type="search" placeholder="Search..." />
      </div>
      <div className="data_retrieved_container">
        {wikiData &&
          wikiData.map((item, index) => {
            return (
              <ul>
                <li>{item}</li>
              </ul>
            );
          })}
      </div>
    </div>
  );
};
