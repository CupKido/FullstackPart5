import { useState, useMemo, useEffect, useRef } from 'react'
import Task from './task'
let user = {}
function Todos() {
    const [userId, setUserId] = useState(0)
    const [task_title, setTitle] = useState('')
    let task_id = useMemo(() => 0, [])
    const [sortMethod, setSortMethod] = useState('serial') // serial, alphabetic, completed, random
    const [Tasks, setTasks] = useState([])
    function addTask() {
        console.log(task_title)
        setTasks([...Tasks, { title: task_title, completed: false, task_id: Tasks.length + 1 }])
    }
    
    // initial fetch for tasks
    useEffect(() => {
      console.log("useEffect Todos")
      user = JSON.parse(localStorage.getItem('user'))
      setUserId(user.id)
      async function getTasks() {
        fetch('https://jsonplaceholder.typicode.com/todos?userId=' + user.id)
        .then(response => response.json())
        .then(json => setTasks(json));
      }
  
      getTasks();
    }, []);


    const previousSortMethodRef = useRef(sortMethod);
    // sort tasks by sortMethod when sortMethod changes
    useEffect(() => {
      console.log("useEffect sortMethod")
      if (previousSortMethodRef.current !== sortMethod) {
        previousSortMethodRef.current = sortMethod;
      } else {
        return; // Ignore the first run
      }
      setTasks(sortTasks(Tasks));
    }, [sortMethod]);

    function HadleCompleteTask(task_id){
      console.log("Task ID: ", task_id)
      let tasks = Tasks.map((task) => {
        if(task.id === task_id){
          console.log("from " + task.completed + " to " + !task.completed)
          task.completed = !task.completed
        }
        return task
      })
      if(sortMethod === 'completed'){
        setTasks(sortTasks(tasks))
      }else{
        setTasks(tasks)
      }
    }

    function sortTasks(tasks){
      let sortedTasks = [...tasks];
      if(sortMethod === 'alphabetic'){
        sortedTasks.sort((a, b) => a.title.localeCompare(b.title));
      }
      else if(sortMethod === 'completed'){
        sortedTasks.sort((a, b) => a.completed - b.completed);
      }
      else if(sortMethod === 'random'){
        sortedTasks.sort(() => Math.random() - 0.5);
      }
      else
      {
        sortedTasks.sort((a, b) => a.id - b.id);
      }
      return sortedTasks
    }

    function getTasksElements()
    {
      console.log("getTasksElements")
      return Tasks.map((task, index) => (
        <Task key={index} title={task.title} completed={task.completed} taskId={task.id} onCompletedChange={HadleCompleteTask}  />
    ));
    }

    return (
      <> 
        <label >Add Task</label>
        <input type="text" id="taskTitle" onChange={(e) => setTitle(e.target.value)} />\
        <button onClick={addTask}>Add</button>
        <select id="sotedBy" onChange={(e) => setSortMethod(e.target.value)}>
          <option value="serial">Serial</option>
          <option value="alphabetic">Alphabetic</option>
          <option value="completed">Completed</option>
          <option value="random">Random</option>
        </select>
        {
          getTasksElements()
        }
      </>
    )
  }

  export default Todos