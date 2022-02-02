import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Checkbox, Divider, Button, Input, Form, Typography, List} from 'antd';



const App=() => {
 
  
  
  const [todoItems, setTodoItems] = useState([]);
  const [allTodoItems, setAllTodoItems] =  useState([])
  const [checkedItems, setcheckedItems] = useState([]);
  const [filter, setFilter] = useState('All')

  const onAdd = (data) =>{
    setAllTodoItems([ ...allTodoItems, {id:new Date().getTime().toString(), desc: data.desc  ,checked:false}]);
  }


  const onAll = () =>{
    setFilter('All');
  }

  const onActive = () =>{
    setFilter('Active');
  }

  const onCompleted = () =>{
    setFilter('Completed');
  }

  const onRemove = (id) =>{
    var newTodoItems = allTodoItems.filter((item)=>{return id !== item.id})
    setAllTodoItems(newTodoItems);
    //setTodoItems(allTodoItems);
  }

  const onClearCompleted = () =>{
    var newTodoItems = allTodoItems.filter((item)=>{return item.checked === false})
    setAllTodoItems(newTodoItems);
  }

 
  const onChange = (e, olditem) =>{
    console.log(e, olditem);
   
    var dummy = allTodoItems.map(item=>{
        console.log("item: ", item);
        console.log("old item: ", olditem);

        if(olditem.id !== item.id)
        {
          return {...item};
        }
        else
        {
          return {...item, checked: !olditem.checked};
        }
   
    
     })
    console.log(dummy)
    setAllTodoItems(dummy);

    // var newTodoItems = allTodoItems.filter((x)=>{return x.id != item.id});
    
    // setAllTodoItems([ ...newTodoItems, {id: item.id, desc: item.desc, checked: item.checked} ]);

  }
  return (
    <>

        <Form
            name="basic"
            onFinish={onAdd}
          >
            <Form.Item name="desc"  defaultValue="" rules={[{ required: true, message: 'Please enter a description!' }]}>
              <Input 
              placeholder='What to do>'
            />
            </Form.Item>

            <Form.Item >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
        </Form>

 
          {/* <Checkbox.Group
            options={todoItems}
           /> */}

          <Divider/>

          
          <List
          header={<div>{filter} Todo Items</div>}
          footer={
            <div>
              <Button onClick={onAll}>All</Button>
              <Button onClick={onActive}>Active</Button>
              <Button onClick={onCompleted}>Completed</Button><br></br><br></br>
              <Button onClick={onClearCompleted}>Clear All Completed</Button>
            </div>}
          bordered
          dataSource={allTodoItems}
          renderItem={item => {
            if(filter==='All')
            {
              return<List.Item>
              <Checkbox defaultChecked={item.checked} onChange={(e)=>{onChange(e,item)}}>{item.desc}</Checkbox>
              <Button onClick={()=>{onRemove(item.id)}}>x</Button>
            </List.Item>
            }
            else if(filter === 'Active')
            {
              if(item.checked === false)
              return<List.Item>
              <Checkbox defaultChecked={item.checked} onChange={(e)=>{onChange(e,item)}}>{item.desc}</Checkbox>
              <Button onClick={()=>{onRemove(item.id)}}>x</Button>
              </List.Item>
            }
            else if(filter === 'Completed')
            {
              if(item.checked === true)
              return<List.Item>
              <Checkbox defaultChecked={item.checked} onChange={(e)=>{onChange(e,item)}}>{item.desc}</Checkbox>
              <Button onClick={()=>{onRemove(item.id)}}>x</Button>
              </List.Item>
            }
            
          
          }} 
          />
          <Divider/>
 
    </>
  );
}

export default App;
