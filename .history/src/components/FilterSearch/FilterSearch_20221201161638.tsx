import React, { useState } from "react";
import "../FilterSearch/FilterSearch.css";

type FilterSearchProps = {
  inputValue: string;
  setInputValue: (value: string) => void;
};

export const FilterSearch = ({
  inputValue,
  setInputValue,
}: FilterSearchProps) => {
  return (
    <div className="search_input">
      <input type="search" placeholder="Search..." />
    </div>
  );
};
