import React, { useState } from "react";
import "../FilterSearch/FilterSearch.css";

type FilterSearchProps = {
  inputValue: string;
  setInputValue: (value: string) => void;
};

export const FilterSearch = () => {
  const [inputValue, setInputValue] = useState<FilterSearchProps | string>("");

  return (
    <div className="search_input">
      <input type="search" placeholder="Search..." />
    </div>
  );
};
