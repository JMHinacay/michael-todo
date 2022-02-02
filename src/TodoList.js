import { List } from "antd";
import TodoItem from "./TodoItem.js";
import { useStoreState } from "easy-peasy";
export default function TodoList() {
  const todos = useStoreState((state) => state.todoModel.todos);
  return (
    <div>
      {todos && (
        <List
          itemLayout="horizontal"
          dataSource={todos}
          renderItem={(item) => <TodoItem todo={item} />}
        />
      )}
    </div>
  );
}