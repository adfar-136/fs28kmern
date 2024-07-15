import React, { useState } from 'react'

export default function Login() {
    const [email,setEmail]= useState("")
    const [password,setPassword] = useState("")
    const [message,setMessage] = useState("")
    async function handleSubmit(e){
        e.preventDefault()
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({email,password})
        })
        const data = await response.json()
        if(response.ok){
            setMessage(`Logged in seccussfully, ${data.email}`)
        }
    }
  return (
    <div>
        <h1>login</h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" 
            value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" 
            value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type="submit">Login</button>
        </form>
        {message && <h1>{message}</h1>}
    </div>
  )
}
