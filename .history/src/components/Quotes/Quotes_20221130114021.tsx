import React from "react";
import { Collapse } from "antd";
import { QuoteTexts } from "../../Utilities/utility";

const { Panel } = Collapse;

export const Quotes = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse defaultActiveKey={["1"]} onChange={onChange}>
      <Panel header="Quote One" key="1">
        <p>{}</p>
      </Panel>
      <Panel header="Quote Two" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="Quote Three" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};

{
  /* <Collapse defaultActiveKey={["1"]} onChange={onChange}>
<Panel header="Quote One" key="1">
  <p>{}</p>
</Panel>
<Panel header="Quote Two" key="2">
  <p>{text}</p>
</Panel>
<Panel header="Quote Three" key="3">
  <p>{text}</p>
</Panel>
</Collapse> */
}
