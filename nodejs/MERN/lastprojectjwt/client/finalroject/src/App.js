import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Signup from './Components/Signup'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import OppurtunitiesComponent from './Components/OppurtunitiesComponent'
import Dashboard from './Components/Dashboard'
export default function App() {
  return (
    <>
     <BrowserRouter>
       <Navbar/>
        <Routes>
            <Route path='/' element={<OppurtunitiesComponent/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>

        </Routes>
     </BrowserRouter>
    </>
  )
}
