import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Aboutt() {
  const navigate = useNavigate()
  function handleClick(){
     navigate("/contact")
  }
  return (
    <div>
     <h1>about page</h1>
     <button onClick={handleClick}>Contact page</button>   
    </div>
  )
}
