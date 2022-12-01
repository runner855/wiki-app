import React, { useEffect, useState } from "react";
import SearchCall from "../../SearchApi/SearchCall";

export const Search = () => {
  const [wikiData, setWikiData] = useState();

  useEffect(() => {
    SearchCall.get("steve jobs", {}).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div className="data_container">
      <div className="title">My Wikipedia</div>
    </div>
  );
};
