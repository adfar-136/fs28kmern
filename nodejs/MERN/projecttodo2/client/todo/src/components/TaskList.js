import React from 'react'
import Task from './Task'

export default function TaskList({tasks,fetchTasks}) {
  return (
    <div>
        <h1>Tasks List Below</h1>
        {tasks.map((task)=>(
            <Task key={task._id} task={task} fetchTasks= {fetchTasks}/>
        ))}
    </div>
  )
}
