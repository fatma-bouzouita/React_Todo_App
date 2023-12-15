import React, { useState } from 'react';
import './index.css';
import TaskInput from './components/TaskInput';
import Stats from './components/Stats';
import { FaThumbsUp } from 'react-icons/fa';
import { MdEdit, MdDeleteSweep } from 'react-icons/md';

function App() {
  const [toDoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'unchecked'
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [updatedTaskName, setUpdatedTaskName] = useState('');
  const [updatedTaskChecked, setUpdatedTaskChecked] = useState(false);

  const openUpdateModal = (task) => {
    setSelectedTask(task);
    setUpdatedTaskName(task.taskName);
    setUpdatedTaskChecked(task.checked);
    setShowUpdateModal(true);
  };

  const closeUpdateModal = () => {
    setSelectedTask(null);
    setUpdatedTaskName('');
    setUpdatedTaskChecked(false);
    setShowUpdateModal(false);
  };

  const updateTask = () => {
    if (updatedTaskName.trim() !== '' && selectedTask) {
      setTodoList((prevTodoList) =>
        prevTodoList.map((task) =>
          task.taskName === selectedTask.taskName
            ? { ...task, taskName: updatedTaskName, checked: updatedTaskChecked }
            : task
        )
      );
      closeUpdateModal();
    }
  };

  const deleteTask = (deleteTaskName) => {
    setTodoList((prevTodoList) => prevTodoList.filter((task) => task.taskName !== deleteTaskName));
  };

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setTodoList([...toDoList, newTask]);
  };

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
      <div>
        {showUpdateModal && (
          <div className="update-task-modal">
            <div className="update-task-content">
              <h2>Update Task</h2>
              <div className="prop">
                <input
                  type="text"
                  value={updatedTaskName}
                  onChange={(e) => setUpdatedTaskName(e.target.value)}
                />
                <label>
                  <input
                    type="checkbox"
                    checked={updatedTaskChecked}
                    onChange={() => setUpdatedTaskChecked(!updatedTaskChecked)}
                  />
                </label>
              </div>
              <button onClick={updateTask}>Update</button>
              <button onClick={closeUpdateModal}>Cancel</button>
            </div>
          </div>
        )}
      </div>
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
              <li className="items">
                <div className="checkbox-container">
                  <input type="checkbox" checked={task.checked} onChange={() => toggleCheck(task.taskName)} />
                </div>
                <div className="items-text">
                  <p className={task.checked ? 'isChecked' : ''}>{task.taskName} </p>
                  <MdEdit className="update-icon" onClick={() => openUpdateModal(task)} />
                  <MdDeleteSweep className="delete-icon" onClick={() => deleteTask(task.taskName)} />
                </div>
              </li>
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
