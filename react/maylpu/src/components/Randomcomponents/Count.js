import React, { useState } from 'react'

function Count() {
    const [count,setCount] = useState(0)
    function handleIncrement(){
        setCount(count+1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Count