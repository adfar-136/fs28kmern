import React, { useState } from 'react'
 const todoContext = React.createContext()
export default function TodoContext({children}) {
     const [todos,setTodos]= useState([]);
     const addTodo = (todo)=>{
        setTodos([...todos,{todo,completed:false}])
     }
     const toggleTodo = (index)=>{
         const newTodos = todos.map((item,i)=> 
            i===index ? {...item,completed:!item.completed}:item)
         setTodos(newTodos)
     }
   const deleteTodo =(index)=>{
    const newTodos = todos.filter((_,i)=> i!==index)
    setTodos(newTodos)
   }
  return (
    <div>
        <todoContext.Provider value={{todos,addTodo,toggleTodo,deleteTodo}}>
           {children}
        </todoContext.Provider>
    </div>
  )
}

export {todoContext}