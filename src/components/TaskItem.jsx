import React from 'react'
import { MdDeleteSweep } from 'react-icons/md'

const TaskItem = ({ task, deleteTask,toggleCheck }) => {
  return (
    <li className="items">
      <div className="checkbox-container">
        <input type="checkbox" checked={task.checked} onChange={() =>toggleCheck(task.taskName)}/>
      </div>
      <div className="items-text">
        <p className={task.checked ? 'isChecked' : ''}>{task.taskName} </p>
        <MdDeleteSweep className="delete-icon" onClick={() => deleteTask(task.taskName)} />
      </div>
    </li>

  )
}

export default TaskItem