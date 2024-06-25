import React from 'react'
import myStyle from "./File2.module.css"
export default function File2() {
  return (
    <div className={myStyle.container2}>
        <h1 className={myStyle.heading2}>This is my file 2 heading</h1>
        <p className='main container para'>hello</p>
    </div>
  )
}
