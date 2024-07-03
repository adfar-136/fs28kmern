import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementStore, decrementStore } from './thunkstore/action'
export default function Maincounter() {
    const count = useSelector((state)=>state)
    const dispatch = useDispatch()
    console.log(count)
  return (
    <div>
        <h1>Your number is {count}</h1>
        <button onClick={()=>dispatch(incrementStore(100))}>Increment by 100</button>
        <button onClick={()=>dispatch(incrementStore(500))}>Increment by 500</button>
        <button onClick={()=>dispatch(decrementStore(1000))}>decrement by 1000</button>
        <button onClick={()=>dispatch(incrementStore(1054500))}>increment by 1054500</button>
        <button onClick={()=>dispatch(decrementStore(1054500))}>decrement by 1054500</button>
    </div>
  )
}
