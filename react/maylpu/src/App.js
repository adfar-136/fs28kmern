import React, { useState } from 'react'
import Demo from './components/classbasedcomponents/Demo'

export default function App() {
  const [color,setColor] =useState("gray")
  return (
    <div>
      <Demo fName="Adfar" lname="rashed" color={color}/>
      <button onClick={()=>setColor("blue")}>blue</button>
      <button onClick={()=>setColor("orange")}>orange</button>
      <button onClick={()=>setColor("brown")}>brown</button>
      <button onClick={()=>setColor("pink")}>pink</button>
    </div>
  )
}
