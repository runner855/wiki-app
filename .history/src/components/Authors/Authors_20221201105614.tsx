import React from "react";
import { Select } from "antd";
import {
  AUTHOR_ONE,
  AUTHOR_TWO,
  AUTHOR_THREE,
} from "../../../.history/src/constants/dictionary_20221201105323";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export const Authors = () => (
  <Select
    defaultValue="J.K. Rowling"
    style={{ width: 200 }}
    onChange={handleChange}
    options={[
      { label: { AUTHOR_ONE }, value: { AUTHOR_ONE } },
      { label: { AUTHOR_TWO }, value: { AUTHOR_TWO } },
      { label: { AUTHOR_THREE }, value: { AUTHOR_THREE } },
    ]}
  />
);
