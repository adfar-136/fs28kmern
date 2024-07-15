import React from 'react'

export default function personlayout({children,hardik,vedang}) {
    const condition = true;
  return (
    <div>
        {children}
        {condition?hardik:vedang}
    </div>
  )
}
