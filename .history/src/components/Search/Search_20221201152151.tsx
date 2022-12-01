import React, { useEffect, useState } from "react";
import SearchCall from "../../SearchApi/SearchCall";
import "../Search/Search.css";

export const Search = () => {
  const [wikiData, setWikiData] = useState<[] | undefined>();

  useEffect(() => {
    SearchCall.get("steve jobs", {}).then((res) => {
      setWikiData(res);
    });
  }, []);
  return (
    <div className="data_container">
      <div className="title">My Wikipedia</div>
      <div className="search_input">
        <input type="search" placeholder="Search..." />
      </div>
      data
    </div>
  );
};
