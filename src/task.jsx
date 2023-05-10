import { useState } from 'react'
import './Todos.css'
function Task({ title, completed, taskId, onCompletedChange }) {

  return (
    <div className="task-container">
      <input className="task-checkbox" type="checkbox" checked={completed} onChange={() => onCompletedChange(taskId)} />
      <p className={`task-title ${completed ? 'task-completed' : 'task-not-completed'}`}>{title}</p>
    </div>
  );
}

export default Task