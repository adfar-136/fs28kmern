import React from 'react'
import useCounter from './useCounter'

export default function Like() {
    const {count,increment} = useCounter()
  return (
    <div>
        <button onClick={()=>increment()}>Like : {count}</button>
    </div>
  )
}
