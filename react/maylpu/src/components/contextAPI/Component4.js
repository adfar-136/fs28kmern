import React from 'react'
import { myContext,lastName } from '../../App'
export default function Component4() {
  return (
    <div>
        <myContext.Consumer>
            {(fName)=>{
              return (
                <lastName.Consumer>
                    {(lName)=>{
                      return (
                        <>
                         <h1>Hello {fName} {lName}</h1>
                        </>
                      )
                    }}
                </lastName.Consumer>
              )
            }}
        </myContext.Consumer>
    </div>
  )
}
