import { useState } from 'react'

function Task({ title, completed }) {

    return (
      <> 
        <p>{title}. {completed ? "Done" : ""}</p>
      </>
    )
  }

  export default Task