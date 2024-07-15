"use client"
import React from 'react'

export default function adhaarpage({params}) {
    console.log(params)
  return (
    <div>
        <h2>
            hello Adfarrrr {params.adhaar}
        </h2>
    </div>
  )
}
