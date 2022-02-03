import "./App.css";
import { useState } from "react";
import { Radio, Button, Input } from "antd";

export default function FilterButton({ onChangeFilter }) {
  const [input, setInput] = useState("");

  return (
    <Radio.Group
      defaultValue="All"
      buttonStyle="solid"
      onChange={(e) => {
        onChangeFilter(e.target.value);
      }}
    >
      <Radio.Button value="All">All</Radio.Button>
      <Radio.Button value="Active">Active</Radio.Button>
      <Radio.Button value="Completed">Completed</Radio.Button>
    </Radio.Group>
  );
}
