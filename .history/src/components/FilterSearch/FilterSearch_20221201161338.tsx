import React from "react";
import "../FilterSearch/FilterSearch.css";

type FilterSearchProps = {
  value: string;
  setValue: (value: string) => void;
};

export const FilterSearch = () => {
  return (
    <div className="search_input">
      <input type="search" placeholder="Search..." />
    </div>
  );
};
