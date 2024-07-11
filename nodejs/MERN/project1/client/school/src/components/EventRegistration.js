import React, { useState } from 'react'

export default function EventRegistration() {
    const [username,setUsername] = useState("")
    const [event,setEvent] = useState("")
    const [date,setDate] = useState("")
    async function handleSubmit(e){
        e.preventDefault()
        const response = await fetch('http://localhost:5000/register-event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, event, date})
        })
        const data = await response.json()
        console.log(data)
    }
  return (
    <div>
        <h1>Event Registration</h1>
       <form onSubmit={handleSubmit}>
       <div>
            <label htmlFor="">Username</label>
            <input type="text" value={username}
            onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Event Name</label>
            <input type="text" value={event}
            onChange={(e)=>setEvent(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Event Date</label>
            <input type="date" value={date}
            onChange={(e)=>setDate(e.target.value)}/>
        </div>
        <button type="submit">Register Event</button>
       </form>
    </div>
  )
}
