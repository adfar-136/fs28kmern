import React from 'react'
import { useParams } from 'react-router-dom'

export default function Numbers() {
    const {userid,no} = useParams()

  return (
    <div>
    <h1>user {userid} details and this is the phone number {no}</h1>
    </div>
  )
}
