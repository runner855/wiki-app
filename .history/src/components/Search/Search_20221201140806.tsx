import React, { useEffect } from "react";
import SearchCall from "../../SearchApi/SearchCall";

export const Search = () => {
  useEffect(() => {
    SearchCall.get();
  });
  return <div>Search</div>;
};
