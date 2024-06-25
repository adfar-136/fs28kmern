
import React from 'react'

export default function page({params}) {
console.log(params)
  return (
    <div>
        <h1>Username details</h1>
        <p>Username: {params.username}</p>
        
    </div>
  )
}
