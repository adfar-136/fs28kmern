import React, { useContext, useState } from 'react'
import { todoContext } from './TodoContext'
export default function AddTodo() {
    const [text,setText] = useState('')
    const {addTodo} = useContext(todoContext)
    function handleSubmit(e){
        e.preventDefault()
        if(text.length>0){
            addTodo(text)
            setText("")
        }
    }
   
  return (
    <div>
        <form >
            <input type="text" placeholder='Add a task' 
            value={text}
            onChange={(e)=>setText(e.target.value)}
            />
        </form>
        <button onClick={handleSubmit}>Add</button>
     
    </div>
  )
}
