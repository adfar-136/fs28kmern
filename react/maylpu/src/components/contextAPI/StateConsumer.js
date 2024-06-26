import React, { useContext } from 'react'
import { myContext } from './StateProvider'
export default function StateConsumer() {
    const {count,setCount} = useContext(myContext)
  return (
    <div>
       {/* <myContext.Consumer>
        {({count,setCount})=>{
            return (
                <div>
                    <h1>{count}</h1>
                    <button onClick={()=>setCount(count+1)}>Increment</button>
                </div>
            )
        }}
       </myContext.Consumer> */}
       <h1>{count}</h1>
       <button onClick={()=>setCount(count+2)}>Count++</button>
    </div>
  )
}
