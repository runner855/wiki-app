import React, { useEffect } from "react";
import SearchCall from "../../SearchApi/SearchCall";

export const Search = () => {
  useEffect(() => {
    SearchCall.get("steve jobs", {}).then((res) => {
      console.log(res);
    });
  }, []);
  return <div>Search</div>;
};
