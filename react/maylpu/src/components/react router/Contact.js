import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Main contact parent page</h1>
      <button onClick={()=>{navigate("/")}}>Home</button>
      <Outlet/>
    </div>
  )
}
