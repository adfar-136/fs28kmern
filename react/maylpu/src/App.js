import React from 'react'
import StateProvider from './components/contextAPI/StateProvider'
import TodoContext from './components/todo/TodoContext'
import AddTodo from './components/todo/AddTodo'
import TodoList from './components/todo/TodoList'

export default function App() {
  return (
    <div>
      <TodoContext>
        <AddTodo/>
        <TodoList/>
      </TodoContext>
    </div>
  )
}
