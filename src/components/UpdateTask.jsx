import React, { useState } from 'react';
import { MdUpdate } from 'react-icons/md';

export default function UpdateTask({ isOpen, onClose, task, updateTask, deleteTask }) {
  const [updatedTaskName, setUpdatedTaskName] = useState(task?.taskName || '');
  const [updatedTaskChecked, setUpdatedTaskChecked] = useState(task?.checked || false);

  const handleUpdate = () => {
    const updatedTask = {
      ...task,
      taskName: updatedTaskName,
      checked: updatedTaskChecked,
    };

    updateTask(updatedTask);
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2>Update Task</h2>
          <label htmlFor="updatedTaskName">Task Name:</label>
          <input
            type="text"
            id="updatedTaskName"
            value={updatedTaskName}
            onChange={(e) => setUpdatedTaskName(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              checked={updatedTaskChecked}
              onChange={() => setUpdatedTaskChecked(!updatedTaskChecked)}
            />
            Completed
          </label>
          <button onClick={handleUpdate}>Update Task</button>
        </div>
      </div>
    )
  );
}