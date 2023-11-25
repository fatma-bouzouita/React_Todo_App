import './index.css';
import TaskInput from './components/TaskInput'
import { useState } from "react";
import TaskItem from './components/TaskItem';
import Stats from './components/Stats';
import UpdateTask from './components/UpdateTask';
import { FaThumbsUp } from 'react-icons/fa';
import { MdUpdate } from 'react-icons/md';

function App() {
  const [toDoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'unchecked'
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const openUpdateModal = (task) => {
    setSelectedTask(task);
    setShowUpdateModal(true);
  };

  const closeUpdateModal = () => {
    setSelectedTask(null);
    setShowUpdateModal(false);
  };

  const updateTask = (updatedTask) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((task) =>
        task.taskName === selectedTask.taskName ? updatedTask : task
      )
    );
    closeUpdateModal();
  };

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setTodoList([...toDoList, newTask])
  };
  function deleteTask(deleteTaskName) { setTodoList(toDoList.filter(task => task.taskName !== deleteTaskName)) }
  console.log(toDoList);

  function toggleCheck(taskName) {
    setTodoList((prevTodoLIist) =>
      prevTodoLIist.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task,
      ),
    );
    const updatedTask = toDoList.find((task) => task.taskName === taskName);
    console.log(updatedTask ? updatedTask.checked : null);
  }

  const filteredTasks = toDoList.filter((task) => {
    if (filter === 'checked') {
      console.log('Checking filter: ', task.checked);
      return task.checked;
    }
    if (filter === 'unchecked') {
      console.log('Unchecked filter: ', !task.checked);
      return !task.checked;
    }
    console.log('All filter');
    return true;
  });
  const clearCompleted = () => {
    const updatedList = toDoList.filter((task) => !task.checked);
    setTodoList(updatedList);
  };
  return (

    <div className="container">
      <h1> To do List</h1>
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('checked')}>Completed</button>
        <button onClick={() => setFilter('unchecked')}>Incompleted</button>
      </div>
      <TaskInput addTask={addTask} />
      <UpdateTask
        isOpen={showUpdateModal}
        onClose={closeUpdateModal}
        task={selectedTask}
        updateTask={updateTask}
      />
      {(filter === 'checked' || filter === 'all') && (
    <button className="clear-completed-button" onClick={clearCompleted}>
      Clear Completed
    </button> )}
      <div className="toDoList">

        <span> To DO  </span>
        
        <ul className="list-items">
      
          {filteredTasks.map((task, key) => (
            <div class="maj">
            <TaskItem task={task} key={key} deleteTask={deleteTask}
              toggleCheck={toggleCheck} />
              <MdUpdate className="update-icon" onClick={() => openUpdateModal(task)} />
              </div>

          
              
          ))}
        </ul>
        <div>
          {toDoList.length === 0 ?
            (<div className="notify">
              <p>  Congratulations! You've completed all tasks ! </p>
              <FaThumbsUp className="icon" />
            </div>
            ) : null}

        </div>
      </div>
    
      <Stats toDoList={toDoList} />
    </div>

  );
};

export default App;
