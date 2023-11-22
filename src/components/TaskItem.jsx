import React from 'react'
import {MdDeleteSweep} from 'react-icons/md'

const TaskItem = ({ task }) => {
  return (
<li className="items">
  <div className="checkbox-container">
    <input type="checkbox" />
  </div>
  <div className="items-text">
    <div>{task.taskName}</div>
    <MdDeleteSweep className="delete-icon" />
  </div>
</li>

  )
}

export default TaskItem