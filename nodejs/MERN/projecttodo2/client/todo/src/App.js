import React, { useEffect, useState } from 'react'
import TaskList from './components/TaskList'
import Taskform from './components/Taskform'

export default function App() {
  const [tasks,setTasks] = useState([])
  useEffect(()=>{
      fetchTasks()
  },[])
  const fetchTasks =async()=>{
    const res = await fetch("http://localhost:3000/tasks")
    const data = await res.json()
    setTasks(data)
  }
  return (
    <div>
      <Taskform fetchTasks={fetchTasks}/>
      <TaskList tasks={tasks} fetchTasks={fetchTasks}/>
    </div>
  )
}
