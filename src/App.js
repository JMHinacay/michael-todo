import { Col, Layout, Row } from "antd";
import { useState } from "react";
import "./App.css";
import InputBar from "./InputBar";
import TodoList from "./TodoList";

const { Content } = Layout;

const App = () => {
  const [allTodoItems, setAllTodoItems] = useState([]);

  return (
    <>
      <Layout className="layout">
        <Content style={{ padding: "0 50px" }}>
          <br />
          <br />
          <Row>
            <Col span={12} offset={6}>
              <InputBar
                allTodoItems={allTodoItems}
                setAllTodoItems={setAllTodoItems}
              />
              <TodoList
                allTodoItems={allTodoItems}
                setAllTodoItems={setAllTodoItems}
              />
            </Col>
          </Row>
        </Content>
        <br />
        <br />
      </Layout>
    </>
  );
};

export default App;
