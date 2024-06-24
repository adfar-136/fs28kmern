import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './components/react router/Home'
import Aboutt from './components/react router/Aboutt'
import Blog from './components/react router/Blog'
import Contact from './components/react router/Contact'
import Shop from './components/react router/Shop'
import Adfar from './components/react router/Adfar'
import Pomodoro from './components/Pomodoro'
import Navbar from './components/react router/Navbar'
import User from './components/react router/User'
import UserDetails from './components/react router/UserDetails'
import Phone from './components/react router/Phone'
import Numbers from './components/react router/Numbers'

export default function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<Aboutt/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/user/:userid' element={<UserDetails/>}/>
          <Route path='/user/:userid/phone' element={<Phone/>}/>
          <Route path='/user/:userid/phone/:no' element={<Numbers/>}/>
          <Route path='/adfar' element={<Adfar/>}/>
    
          <Route path='/pomodoro' element={<Pomodoro/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
