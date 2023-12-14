import React from 'react'
import { useState } from 'react';
import { MdDeleteSweep } from 'react-icons/md'
import { MdEdit } from 'react-icons/md';


const TaskItem = ({ task, deleteTask, updateTask, toggleCheck, }) => {
  console.log('TaskItem received task:', task);
  const [localTask, setLocalTask] = useState(task);
  const [toDoList, setTodoList] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [updatedTaskName, setUpdatedTaskName] = useState('');
  const [updatedTaskChecked, setUpdatedTaskChecked] = useState(task?.checked || false);
  const openUpdateModal = (task) => {
    setLocalTask(task);
    setSelectedTask(task);
    setUpdatedTaskName(task.taskName);
    setUpdatedTaskChecked(task.checked);
    setShowUpdateModal(true);
  };
  const closeUpdateModal = () => {
    setShowUpdateModal(false);
  };


  const handleUpdateTask = () => {
    if (updatedTaskName.trim() !== '') {
      updateTask({
        ...task,
        taskName: updatedTaskName,
        checked: updatedTaskChecked,
      });
      closeUpdateModal();
    }
  };
console.log('TaskItem received task 2:', localTask);
return (
  <li className="items">
    <div className="checkbox-container">
      <input type="checkbox" checked={task.checked} onChange={() => toggleCheck(task.taskName)} />
    </div>
    <div className="items-text">
      <p className={task.checked ? 'isChecked' : ''}>{task.taskName} </p>
      <MdDeleteSweep className="delete-icon" onClick={() => deleteTask(task.taskName)} />
      <MdEdit className="update-icon" onClick={() => openUpdateModal(task)} />
      <div>
        {showUpdateModal && (
          <div className="update-task-modal">
            <div className="update-task-content">
              <h2>Update Task</h2>
              <div className='prop'>
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
              <button onClick={handleUpdateTask}>Update</button>
              <button onClick={closeUpdateModal}>Cancel</button>
            </div>
          </div>
        )}
      </div>

    </div>
  </li>

)
        }

export default TaskItem