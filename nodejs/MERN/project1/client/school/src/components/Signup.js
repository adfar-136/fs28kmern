import React, { useState } from 'react'

export default function Signup() {
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    async function handleSubmit(e){
        e.preventDefault()
        const response = await fetch("http://localhost:5000/register",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({username,email,password})
        })
        const data = await response.json()
        console.log(data)
    }
      return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Username" 
                value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Email" 
                value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" placeholder="Password" 
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button>SignUp</button>
        </form>
    </div>
  )
}
