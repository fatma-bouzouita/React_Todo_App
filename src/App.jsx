import './index.css';
import TaskInput from './components/TaskInput'
import { useState } from "react";
import TaskItem from './components/TaskItem';
import { FaThumbsUp } from 'react-icons/fa';
function App() {
  const [toDoList, setTodoList] = useState([]);
  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setTodoList([...toDoList, newTask])
  };
  function deleteTask(deleteTaskName)
  {setTodoList(toDoList.filter(task  => task.taskName!== deleteTaskName))}
  console.log(toDoList);
  return (

    <div className="container">
      <h1> To do List</h1>
      <TaskInput addTask={addTask} />
      <div className="toDoList">
        <span> To DO  </span>
        <ul className="list-items">
          {toDoList.map((task, key) => (
            <TaskItem task={task} key={key}  deleteTask={deleteTask}/>
          ))}
        </ul>
        <div>
          {toDoList.length === 0 ?
            (<div className="notify">
              <p>  Congratulations! You've completed all tasks. </p>
              <FaThumbsUp className="icon" />
            </div>
            ) : null}

        </div>
      </div>
    </div>

  );
};

export default App;
