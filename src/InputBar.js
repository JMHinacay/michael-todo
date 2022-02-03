import "./App.css";
import { useState } from "react";
import { Button, Input } from "antd";

export default function InputBar({ allTodoItems, setAllTodoItems }) {
  const [input, setInput] = useState("");

  const onAdd = (e) => {
    e.preventDefault();
    if (input) {
      setAllTodoItems([
        ...allTodoItems,
        { id: new Date().getTime().toString(), desc: input, checked: false },
      ]);
      setInput("");
      console.log("All todo Items:", allTodoItems);
    }
  };

  return (
    <form name="basic" onSubmit={onAdd}>
      <Input
        placeholder="What to do?"
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Button type="primary" htmlType="submit">
        Add
      </Button>
    </form>
  );
}
