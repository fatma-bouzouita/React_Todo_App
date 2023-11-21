import './index.css';
import TaskInput from './components/TaskInput'
import  { useState } from "react";
function App() {
  const [toDoList, setTodoList]= useState([]);
  const addTask = (taskName) => {
    const newTask = {taskName, checked:false};
    setTodoList([...toDoList,newTask])
  };
  console.log(toDoList);
  return (
    <>
    <div className="container">
      <h1> To do List</h1>
      <TaskInput addTask={addTask}/> 
      <div className="toDoList"></div>
      <span> 
        To DO
      </span>
      <ul className="list-items">

      </ul>
    </div>
    </>

  );
}

export default App;
