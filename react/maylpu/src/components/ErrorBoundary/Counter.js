import React, { useEffect, useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        if(count === 10){
            throw new Error("Bas hogaya")
        }
    })
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}
