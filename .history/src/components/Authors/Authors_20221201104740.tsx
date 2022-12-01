import React from "react";
import { Select } from "antd";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export const Authors = () => (
  return (
  <Select
    defaultValue="J.K. Rowling"
    style={{ width: 200 }}
    onChange={handleChange}
    options={[
      {
        options: [
          { label: "Jack", value: "jack" },
          { label: "Lucy", value: "lucy" },
        ],
      },
    ]}
  />
  )
);
