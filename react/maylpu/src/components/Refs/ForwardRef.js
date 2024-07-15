import React, { useRef } from 'react'
import ChildButton from './ChildButton'


export default function ForwardRef() {
    const btnRef = useRef(null)
    function handleClick (){
        if(btnRef.current){
            btnRef.current.textContent = "Clicked"
        }
    }
  return (
    <div>
       <ChildButton ref={btnRef} onClick={handleClick}>
         Click Me
       </ChildButton>
    </div>
  )
}
