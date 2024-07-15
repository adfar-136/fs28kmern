import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
           
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
        </ul>
    </div>
  )
}
