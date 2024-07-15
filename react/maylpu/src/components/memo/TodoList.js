import React, { useMemo } from 'react'
import { filteredTodos } from './utils'

export default function TodoList({todos,tab,theme}) {
    const filteredItems = useMemo(
        ()=>filteredTodos(todos,tab),
        [todos,tab]
    )
  return (
    <div className={theme}>
        <ul>
            <p>List data</p>
            {filteredItems.map(todo=>(
                <li key={todo.id}>
                    {todo.completed?
                    <s>{todo.text}</s>:
                    todo.text}
                </li>
            ))}
        </ul>
    </div>
  )
}
