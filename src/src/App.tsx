import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItemList from './containers/TodoItemList';
import todoItem from './models/todoItemModel';
function App() {
  const todoItems: todoItem[] = [
    {id:1,name: "tis", note: "det noget pis", order: 0},
    {id:2,name: "something", note: "something something darkside", order: 1},
    {id:3,name: "fffgfgd", note: "something something darkside", order: 2},
    {id:4,name: "gfdfgdfdg", note: "something something darkside", order: 3},
    {id:5,name: "somfdgfgdfgdething", note: "something something darkside", order: 4},
    {id:6,name: "dgfdggfdfdg", note: "something something darkside", order: 5},
    {id:7,name: "gfdgfdgfd", note: "something something darkside", order: 6},
    {id:8,name: "gddfgfd", note: "something something darkside", order: 7}
  ]
  return (
    <div className="App">
      <TodoItemList items={todoItems} />
    </div>
  );
}

export default App;
