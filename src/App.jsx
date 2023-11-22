import './index.css';
import TaskInput from './components/TaskInput'
import { useState } from "react";
import TaskItem from './components/TaskItem';
function App() {
  const [toDoList, setTodoList] = useState([]);
  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setTodoList([...toDoList, newTask])
  };
  console.log(toDoList);
  return (
    <>
      <div className="container">
        <h1> To do List</h1>
        <TaskInput addTask={addTask} />
        <div className="toDoList">
          <span> To DO  </span>
          <ul className="list-items">
            {toDoList.map((task, key) => (
              <TaskItem task={task} key={key} />
            ))}
          </ul>
        </div>
      </div>
    </>

  );
}

export default App;
