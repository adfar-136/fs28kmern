import React, { useContext } from 'react'
import { todoContext } from './TodoContext'

export default function TodoItem({item,index}) {
    const {toggleTodo,deleteTodo} =useContext(todoContext)
   
   
  return (
    <div>
        <li style={{textDecoration:item.completed?'line-through':''}} 
        onClick={()=>toggleTodo(index)}>{item.todo}</li>
        <button onClick={()=>deleteTodo(index)}>Delete</button>
    </div>
  )
}
