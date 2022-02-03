import "./App.css";
import { useState } from "react";
import { Button, List, Radio } from "antd";
import TodoItem from "./TodoItem";
import FilterButton from "./FilterButton";

export default function TodoList({ allTodoItems, setAllTodoItems }) {
  const [filter, setFilter] = useState("All");
  //const [filteredItems, setFilteredItems] = useState(allTodoItems);

  const onChangeFilter = (val) => {
    setFilter(val);
  };

  const onClearCompleted = () => {
    var newTodoItems = allTodoItems.filter((item) => {
      return item.checked === false;
    });
    setAllTodoItems(newTodoItems);
  };

  const filteredTodos = allTodoItems.filter((item) => {
    if (filter === "All") {
      return true;
    } else {
      if (filter === "Active") {
        return item.checked === false;
      } else if (filter === "Completed") {
        return item.checked === true;
      }
    }
  });

  return (
    <List
      header={<div>{filter} Todo Items</div>}
      footer={
        <div>
          <FilterButton onChangeFilter={onChangeFilter} />
          <br />
          <br />
          <Button onClick={onClearCompleted}>Clear All Completed</Button>
        </div>
      }
      bordered
      dataSource={filteredTodos}
      renderItem={(item) => {
        return (
          <TodoItem
            item={item}
            allTodoItems={allTodoItems}
            setAllTodoItems={setAllTodoItems}
          />
        );
      }}
    />
  );
}
