import React, { useRef } from 'react'

export default function InputComponent() {
    const inputRef = useRef(null)
    function handleClick(){
        console.log(inputRef.current)
        inputRef.current.focus()
    }
  return (
    <div>
        <h1>Uncontrolled form component</h1>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>Do something</button>
    </div>
  )
}
