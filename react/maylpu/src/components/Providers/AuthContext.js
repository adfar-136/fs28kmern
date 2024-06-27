import React, { useEffect, useState } from 'react'
export const authContext = React.createContext()
export default function AuthContext({children}) {
    const [isLoggedIn,setIsloggedIn] = useState(false)
    useEffect(()=>{
        let token = localStorage.getItem("token")
        setIsloggedIn(token)
    })
    const login =(token)=>{
        localStorage.setItem("token",token)
        setIsloggedIn(true)
    }
    const logout = ()=>{
        localStorage.removeItem("token")
        setIsloggedIn(false)
    }
  return (
    <div>
        <authContext.Provider value={{isLoggedIn,login,logout}}>
           {children}
        </authContext.Provider>
    </div>
  )
}
