import { List, Button, Typography } from "antd";
const { Text } = Typography;

export default function TodoItem({ todo }) {
  return (
    <>
      <List.Item>
        <Text> {todo.task} </Text>
      </List.Item>
    </>
  );
}