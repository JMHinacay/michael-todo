import "./App.css";
import { useState } from "react";
import { Checkbox, Button, List } from "antd";

export default function TodoItem({ item, setAllTodoItems, allTodoItems }) {
  console.log(item);

  const onChange = (e, olditem) => {
    console.log(e, olditem);
    var dummy = allTodoItems.map((item) => {
      console.log("item: ", item);
      console.log("old item: ", olditem);

      if (olditem.id !== item.id) {
        return { ...item };
      } else {
        return { ...item, checked: !olditem.checked };
      }
    });
    console.log(dummy);
    setAllTodoItems(dummy);
  };

  const onRemove = (id) => {
    var newTodoItems = allTodoItems.filter((item) => {
      return id !== item.id;
    });
    setAllTodoItems(newTodoItems);
  };

  return (
    <List.Item>
      <Checkbox
        checked={item.checked}
        onChange={(e) => {
          onChange(e, item);
        }}
      >
        {item.desc}
      </Checkbox>
      <Button
        onClick={() => {
          onRemove(item.id);
        }}
      >
        x
      </Button>
    </List.Item>
  );
}
