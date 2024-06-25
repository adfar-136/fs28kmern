import React from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Mainhome() {
    const navigate = useNavigate()
  return (
    <div>
        <Navbar/>
        <h1>Adfar rasheed</h1>
        <button onClick={()=>navigate(-2)}>Previous Page</button>
        <h3>Content that should be visible everywhere</h3>
        <Outlet/>
    </div>
  )
}
