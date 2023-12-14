import React, { useState } from 'react';
import './index.css';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import Stats from './components/Stats';
import { FaThumbsUp } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';

function App(task) {
  const [toDoList, setTodoList] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [updatedTaskName, setUpdatedTaskName] = useState('');
  const [updatedTaskChecked, setUpdatedTaskChecked] = useState(task?.checked || false);
  const [filter, setFilter] = useState('all'); 
  const closeUpdateModal = () => {
    setShowUpdateModal(false);
  };
const updateTask = (updatedTask) => {
  setTodoList((prevTodoList) =>
    prevTodoList.map((task) =>
      task.taskName === updatedTask.taskName
        ? { ...task, taskName: updatedTask.taskName, checked: updatedTask.checked }
        : task
    )
  );
  closeUpdateModal();
};



  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setTodoList([...toDoList, newTask]);
  };

  function deleteTask(deleteTaskName) {
    setTodoList(toDoList.filter((task) => task.taskName !== deleteTaskName));
  }

  function toggleCheck(taskName) {
    setTodoList((prevTodoList) =>
      prevTodoList.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  }

  const filteredTasks = toDoList.filter((task) => {
    if (filter === 'checked') {
      return task.checked;
    }
    if (filter === 'unchecked') {
      return !task.checked;
    }
    return true;
  });

  const clearCompleted = () => {
    const updatedList = toDoList.filter((task) => !task.checked);
    setTodoList(updatedList);
  };

  return (
    <div className="container">
      <h1>To do List</h1>
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('checked')}>Completed</button>
        <button onClick={() => setFilter('unchecked')}>Incomplete</button>
      </div>
      <TaskInput addTask={addTask} />
      {filter === 'checked' || filter === 'all' ? (
        <button className="clear-completed-button" onClick={clearCompleted}>
          Clear Completed
        </button>
      ) : null}
      <div className="toDoList">
        <span>To Do</span>
        <ul className="list-items">
          {filteredTasks.map((task, key) => (
            <div className="maj" key={key}>
              <TaskItem task={task} deleteTask={deleteTask}  updateTask={updateTask} toggleCheck={toggleCheck} />
            </div>
          ))}
        </ul>
        <div>
          {toDoList.length === 0 ? (
            <div className="notify">
              <p>Congratulations! You've completed all tasks!</p>
              <FaThumbsUp className="icon" />
            </div>
          ) : null}
        </div>
      </div>
      <Stats toDoList={toDoList} />
    </div>
  );
}

export default App;
