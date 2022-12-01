import React, { useEffect } from "react";
import SearchCall from "../../SearchApi/SearchCall";

export const Search = () => {
  useEffect(() => {
    SearchCall.get(
      "?action=query&list=search&format=json&origin=*&srsearch=coding"
    ).then((res) => {
      console.log(res);
    });
  });
  return <div>Search</div>;
};
