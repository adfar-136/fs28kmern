import React, { useContext } from 'react'
import Component3 from './Component3'
import { lastName } from '../../App'
import { contextt } from '../..'
export default function Component2() {
    const lName = useContext(lastName)
    const obj = useContext(contextt)
    console.log(lName)
    console.log(obj)
  return (
    <div>
        <Component3/>
        <h1>Hello {lName}</h1>
        <h1>{obj.adfar}</h1>
        <h1>{obj.rasheed}</h1>
    </div>
  )
}
