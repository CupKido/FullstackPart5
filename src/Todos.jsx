import { useState, useMemo, useEffect, useRef } from 'react'
import Task from './task'
import './Todos.css'
import { useUser } from './UserContext'

let user = {}
function Todos() {
    const user = useUser()
    const [task_title, setTitle] = useState('')
    let task_id = useMemo(() => 0, [])
    const [sortMethod, setSortMethod] = useState('serial') // serial, alphabetic, completed, random
    const [Tasks, setTasks] = useState([])
    function addTask() {
        console.log(task_title)
        let id = -1
        for(let i = 0; i < Tasks.length; i++){
          if(Tasks[i].task_id > id){
            id = Tasks[i].task_id
          }
        }

        const tasks= [...Tasks, { title: task_title, completed: false, task_id: id + 1 }]
        if(sortMethod === 'completed'){
          setTasks(sortTasks(tasks))
        }else{
          setTasks(tasks)
        }
    }
    
    // initial fetch for tasks
    useEffect(() => {
      console.log("useEffect Todos")
      console.log(user)
      // user = JSON.parse(localStorage.getItem('user'))
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
      <div className="todo-container">
        <div className="todo-controls">
          <label className="todo-label">Add Task: </label>
          <input className="todo-input" type="text" id="taskTitle" onChange={(e) => setTitle(e.target.value)} />
          <button className="todo-button" onClick={addTask}>Add</button>
          <select className="todo-select" id="sotedBy" onChange={(e) => setSortMethod(e.target.value)}>
            <option value="serial">Serial</option>
            <option value="alphabetic">Alphabetic</option>
            <option value="completed">Completed</option>
            <option value="random">Random</option>
          </select>
        </div>
        {getTasksElements()}
      </div>
    );
    
  }

  export default Todos