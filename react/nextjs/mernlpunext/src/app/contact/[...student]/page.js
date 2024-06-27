"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Student() {
    const router = useRouter()
    console.log(router)
  return (
    <div>student
        <button onClick={()=>router.push("/about")}>Change</button>
    </div>
  )
}
