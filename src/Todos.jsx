import { useState, useMemo, useEffect } from 'react'
import Task from './task'
const user = { id : 1, name : "test", email: "test@test.com" }
function Todos() {
    const [userId, setUserId] = useState(user.id)
    const [task_title, setTitle] = useState('')
    let task_id = useMemo(() => 0, [])
    const [Tasks, setTasks] = useState([])
    function addTask() {
        console.log(task_title)
        setTasks([...Tasks, { title: task_title, completed: false, task_id: Tasks.length + 1 }])
    }
    
    useEffect(() => {
      async function getTasks() {
        fetch('https://jsonplaceholder.typicode.com/todos?userId=' + userId)
        .then(response => response.json())
        .then(json => setTasks(json));
        const res = await fetch('https://jsonplaceholder.typicode.com/users/' + userId)
        .then(response => response.json())
        console.log(res)
      }
  
      getTasks();
    }, [userId]);

    return (

      <> 
        <label >Add Task</label>
        <input type="text" id="taskTitle" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" id="userId" onChange={(e) => setUserId(e.target.value)} />
        <button onClick={addTask}>Add</button>
        {Tasks.map((task, index) => (
            <Task key={index} title={task.title} completed={task.completed} />
        ))}
      </>
    )
  }

  export default Todos