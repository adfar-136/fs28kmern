import React from 'react'
import {myContext} from "./StateProvider"
export default function Countconsumer() {
  return (
    <div>
        <myContext.Consumer>
        {({count,setCount})=>{
            return (
                <div>
                    <h1>count :{count}</h1>
                    <button onClick={()=>setCount(count+1)}>count Increment</button>
                </div>
            )
        }}
       </myContext.Consumer>
    </div>
  )
}
