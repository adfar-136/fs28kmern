import React, { useEffect, useState } from 'react'

export default function Pomodoro() {
  const [workDuration,setWorkDuration] = useState(25)
  const [breakDuration,setBreakDuration] = useState(5)
  const [workSecond,setWorkSecond] = useState(1500);
  const [breakSecond,setBreakSecond] = useState(300);
  const [type,setType] = useState("Work");
  const [flag,setFlag] = useState(false);
  const [resetFlag,setResetFlag] = useState(true)
  useEffect(()=>{
        if(flag && type === "Work"){
          if(workSecond>0){
            setTimeout(()=>setWorkSecond(workSecond-1),1000)
          }
          if(workSecond === 0){
            alert('WorkDuration is complete')
            setType("Break")
            setWorkSecond(1500)
          }
        }
        if(flag && type === "Break"){
          if(breakSecond >0){
            setTimeout(()=>setBreakSecond(breakSecond-1),1000)
          }
          if(breakSecond===0){
            alert('BreakDuration is complete');
            setType("Work")
            setBreakSecond(300)
          }
        }
  },[flag,type,workSecond,breakSecond])
  function handleSubmit(e){
    e.preventDefault();
    setWorkSecond(workDuration*60);
    setBreakSecond(breakDuration*60);
  }
  const formatSpecifier =(seconds)=>{
     let minute = parseInt(seconds/60).toString();
     let second = parseInt(seconds%60).toString();
     if(second.length === 1) second="0"+second
     if(minute.length === 1) minute="0"+minute
     return minute+":"+second
  }
  function handleReset(){
    setWorkSecond(1500);
    setBreakSecond(300);
    setType("Work");
    setFlag(false);
    setResetFlag(true)
    setBreakDuration(5)
    setWorkDuration(25)
  }
  return (
    <div>
      <div>
        <h1>{type === "Work"?formatSpecifier(workSecond):formatSpecifier(breakSecond)}</h1>
        <h1>{type==="Work"?"Work":"Break"} - Time</h1>
      </div>
      <div>
        <button onClick={()=>{
          setFlag(true)
          setResetFlag(false)
        }} disabled={flag}>Start</button>
        <button onClick={()=>{
          setFlag(false)
          setResetFlag(false)
        }} disabled={!flag}> Stop</button>
        <button onClick={handleReset} disabled={resetFlag}>Reset</button>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="number" placeholder='Enter Work Duration' 
          value={workDuration} 
          onChange={(e)=>setWorkDuration(e.target.value)}/>
          <input type="number" placeholder='Enter Break Duration' 
          value={breakDuration}
          onChange={(e)=>setBreakDuration(e.target.value)}/>
          <input type="submit" value="set" />
        </form>
      </div>
    </div>
  )
}
