import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Route.css"
export default function Navbar() {
  return (
    <div>
        <header>
        <nav>
          <ul>
            
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/blog">BLOG</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/adfar">Adfar</NavLink></li>
            <li><NavLink to="/pomodoro">Pomodoro</NavLink></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
