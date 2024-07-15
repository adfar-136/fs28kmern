import React,{useContext} from 'react'
import { authContext } from './AuthContext'

export default function Userauthenticate() {
    const {isLoggedIn,login,logout} = useContext(authContext)
    
  return (
    <div>
        {isLoggedIn ? (
           <>
           <h1>you are logged in</h1>
           <button onClick={()=>logout()}>Logout</button>
           </>
        ):(
           <>
            <h1>you are not logged in</h1>
            <button onClick={()=>login("sample")}>Login</button>
           </>
        )}
    </div>
  )
}
