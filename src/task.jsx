import { useState } from 'react'

function Task({ title, completed, taskId, onCompletedChange }) {

    return (
      <> 
        <input type="checkbox" checked={completed} onChange={() => {onCompletedChange(taskId)}} />
        <p>{title}. {completed}</p>
      </>
    )
  }

  export default Task