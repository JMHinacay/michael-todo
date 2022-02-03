import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Checkbox, Divider, Button, Input, Row, Col, List, Layout, Form} from 'antd';
//import TodoItem from './TodoItem';
import InputBar from './InputBar';
const { Content} = Layout;

const App=() => {
 
  const [allTodoItems, setAllTodoItems] =  useState([])
  const [filter, setFilter] = useState('All')
  const [input, setInput] = useState('')

 

  // const onAdd = (data) =>{

  //   setInput('')
  //   setAllTodoItems([ ...allTodoItems, {id:new Date().getTime().toString(), desc: data.desc  ,checked:false}]);
    
  // }

  const onAdd = (e) =>{

    setInput('')
    setAllTodoItems([ ...allTodoItems, {id:new Date().getTime().toString(), desc: input  ,checked:false}]);
    
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


  }
  return (

    <>
        <Layout className="layout">
            
        <Content style={{ padding: '0 50px' }}>
        <br/><br/>
         
          <InputBar setInput={setInput} input={input}/>

            {/* <Input.Group compact>
              <Input 
                placeholder='What to do?'
                value={input}
                onChange={(e)=>{setInput(e.target.value); console.log("input state: ", input)}} 
                onPressEnter={(e)=>onAdd(e)}
              />
              <Button type="primary" onClick={onAdd}>Add</Button>
            </Input.Group> */}

            
      
          <Divider/>

             <List
                header={<div>{filter} Todo Items</div>}
                footer={
                  <div>
                    <Button onClick={onAll}>All</Button>
                    <Button onClick={onActive}>Active</Button>
                    <Button onClick={onCompleted}>Completed</Button><br/><br/>
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
   
              {/* <List
              header={<div>{filter} Todo Items</div>}
              footer={
                <div>
                  <Button onClick={onAll}>All</Button>
                  <Button onClick={onActive}>Active</Button>
                  <Button onClick={onCompleted}>Completed</Button><br/><br/>
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
              /> */}
            <Divider/>
            </Content>
          </Layout>
        
 
    </>
  );
}

export default App;
