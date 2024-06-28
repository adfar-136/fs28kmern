import React from 'react'
import useCounter from './useCounter'

export default function Unlike() {
    const {count,decrement} = useCounter()
  return (
    <div>
        <button onClick={()=>decrement()}>Unlike:{count}</button>
    </div>
  )
}
