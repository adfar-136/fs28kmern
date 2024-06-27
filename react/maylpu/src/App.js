import React, { useState } from 'react'
import TodoList from './components/memo/TodoList'
import { createTodos } from './components/memo/utils'
import "./App.css"
let todos = createTodos()
export default function App() {
const [tab,setTab] = useState("all")
const [isDark,setIsDark] = useState(false)
  return (
    <div>
      <button onClick={()=>setTab("all")}>All</button>
      <button onClick={()=>setTab("active")}>Active</button>
      <button onClick={()=>setTab("completed")}>Completed</button>
      <br />
      <label>
        <input type="checkbox" value="" 
        onChange={(e)=>setIsDark(e.target.checked)}/>
        Dark Mode
      </label>
      <TodoList
       todos = {todos}
       tab = {tab}
       theme = {isDark ?  "dark" : "light"}
      />
    </div>
  )
}
