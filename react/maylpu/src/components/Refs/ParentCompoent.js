import React, { useRef } from 'react'
import FancyInput from './FancyInput'

export default function ParentCompoent() {
    const fancyRef = useRef()
  return (
    <div>
        <FancyInput ref={fancyRef}/>
        <button onClick={() => fancyRef.current.focus()}>Focus</button>
        <button onClick={()=>fancyRef.current.disable()}>Disable</button>
        <button onClick={()=>fancyRef.current.enable()}>Enable</button>
    </div>
  )
}
