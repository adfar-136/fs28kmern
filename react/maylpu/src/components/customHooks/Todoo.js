import React, { useState } from 'react'
import useTodo from './useTodo'

export default function Todoo() {
    const [task,setTask] = useState("")
    const {todos,push,pull} = useTodo()
    function handleSubmission (e){
       e.preventDefault()
       push(task)
       setTask("")
    }
    console.log(todos)
  return (
    <div>
        <form onSubmit={handleSubmission}>
            <input type="text"
            value={task} onChange={(e)=>setTask(e.target.value)}
            placeholder="Add a todo" />
            <input type="submit" value="Add Task" />
            
        </form>
        <ul>
            {todos.map((item,index)=>{
                return <>
                   <li key={index}>{item}</li>
                   <button onClick={()=>pull(index)}>Remove Task</button>
                </>
            })}
        </ul>
    </div>
  )
}
