import React from 'react'
import Signup from './components/Signup'
import EventRegistration from './components/EventRegistration'
import Login from './components/Login'

export default function App() {
  return (
    <div>
      <Signup/>
      <br /><br /><br />
      <Login/>
      <br />
      <br /><br />
      <EventRegistration/>
    </div>
  )
}
