import React, { useState } from 'react'

function App() {
  const [condition,setCondition] = useState(true)
  function handleColor(){
    setCondition(!condition)
  }
  return (
    <div>
      <div style={{height:"100vh",backgroundColor:condition?"white":"black",width:"100vw",border:"2px solid red"}}>
      <button onClick={handleColor}>{condition?"DARK":"LIGHT"}</button>
      </div>
     
    </div>
  )
}

export default App