import React from "react";
import { Select } from "antd";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export const Authors = () => (
  <Select
    defaultValue="J.K. Rowling"
    style={{ width: 200 }}
    onChange={handleChange}
    options={[
      { label: "Jack", value: "jack" },
      { label: "Lucy", value: "lucy" },
    ]}
  />
);
