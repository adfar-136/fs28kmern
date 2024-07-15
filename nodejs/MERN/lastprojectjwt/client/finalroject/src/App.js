import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Signup from './Components/Signup'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
export default function App() {
  return (
    <>
     <BrowserRouter>
       <Navbar/>
        <Routes>
            <Route path='' element/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/dashboard' element/>

        </Routes>
     </BrowserRouter>
    </>
  )
}
