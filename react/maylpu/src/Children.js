import React, { memo, useState } from 'react'

 function Children() {
    const [number,setNumber] = useState(100)
    function handleDecrement(){
        setNumber(number-1)
    }
    console.log(("children"))
  return (
    <div>
        <h1>Number: {number}</h1>
        <button onClick={handleDecrement}>Decrement </button>
    </div>
  )
}
export default memo(Children)