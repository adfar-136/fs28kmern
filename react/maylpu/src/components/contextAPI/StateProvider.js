import React, { useState } from 'react'
import StateConsumer from './StateConsumer'
import Countconsumer from './Countconsumer'
const myContext = React.createContext()
export default function StateProvider() {
    const [count,setCount] = useState(0)
  return (
    <div>
        <myContext.Provider value={{count,setCount}}>
           <StateConsumer/>
           <Countconsumer/>
        </myContext.Provider>
    </div>
  )
}
export {myContext}