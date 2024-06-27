import React, { useRef, useState } from 'react'

export default function Uncontrolledform() {
    const [allow,setAllow] = useState(false)
    const userRef = useRef(null)
    const passwordRef = useRef(null)
    const emailRef = useRef(null);
    function handleSubmit(e){
      e.preventDefault()
      console.log(userRef.current.value)
      console.log(passwordRef.current.value)
      console.log(emailRef.current.value)
      setAllow(true)
    }
  return (
    <div>
        <form>
            <label>Username</label> <br /><br />
            <input type="text" ref={userRef} placeholder="Enter username" />
            <br /><br />
            <label htmlFor="email">Email</label><br /><br />
            <input type="email" ref={emailRef} id='email' placeholder='Enter Email'/><br /><br />
            <label>Password</label> <br /><br />
            <input type="password" ref={passwordRef} placeholder="Enter password" />
            <br /><br />
            <button type="submit"onClick={handleSubmit}>Submit</button>
        </form>
        {allow && (
            <>
              <h1>Hello {userRef.current.value}</h1>
            </>
        )}
    </div>
  )
}
