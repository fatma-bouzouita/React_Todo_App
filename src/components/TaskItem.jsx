import React from 'react'
import {MdDeleteSweep} from 'react-icons/md'

const TaskItem = ({ task,deleteTask }) => {
  return (
<li className="items">
  <div className="checkbox-container">
    <input type="checkbox" />
  </div>
  <div className="items-text">
    <div>{task.taskName}</div>
    <MdDeleteSweep className="delete-icon" onClick={() =>deleteTask(task.taskName)} />
  </div>
</li>

  )
}

export default TaskItem