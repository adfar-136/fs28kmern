import React from 'react'

export default function Task({task,fetchTasks}) {
    // const handleComplete =async ()=>{
    //  const res = await fetch(`http://localhost:3000/tasks/${task._id}`,{
    //     method: 'PUT',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({...task,completed: !task.completed})
    //  })
    //  const data = await res.json()
    //  console.log(data)
    //  fetchTasks()
    // }
    const handleComplete =async ()=>{
        const res = await fetch(`http://localhost:3000/tasks/${task._id}`,{
           method: 'PATCH',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify({completed: !task.completed})
        })
        const data = await res.json()
        console.log(data)
        fetchTasks()
       }
    const handleDelete = async()=>{
        const res = await fetch(`http://localhost:3000/tasks/${task._id}`,{
            method: 'DELETE'
        })
        const data = await res.json()
        console.log(data)
        fetchTasks()
    }
  return (
    <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <p>{task.completed ? "Completed" : "Not Completed"}</p>
        <p>DueDate: {new Date(task.dueDate).toLocaleDateString()}</p>
        <p>Priority: <b>{task.priority}</b></p>
        <button onClick={handleComplete}>
            {task.completed ? "Mark as Not Completed" : "Mark as Completed"}
        </button>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
