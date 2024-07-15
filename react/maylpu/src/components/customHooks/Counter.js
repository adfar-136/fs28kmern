import React from 'react'
import useCounter from './useCounter'

export default function Counter() {
    const {count,increment,decrement}= useCounter()
  return (
    <div>
        <h1>count = {count}</h1>
        <button onClick={()=>increment()}>Increment</button>
        <button onClick={()=>decrement()}>Decrement</button>
    </div>
  )
}
