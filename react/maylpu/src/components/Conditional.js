import React from 'react'

export default function Conditional({allow}) {
   
//   let con = allow?"Yes, you are allowed": "No, you are not allowed";
  return (
    <>
     {allow && <h1>Allowed</h1>}
    </>
  )

}
