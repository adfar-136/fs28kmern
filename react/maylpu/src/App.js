import { useReducer } from "react"
const reducer = (state,action)=>{
  console.log(state,action)
  if(action.type === 'one'){
    return {count:state.count+1}
  } else if(action.type === 'two'){
    return {count:state.count+2}
  }
  return state
}
export default function App(){
  const [state,dispatch]= useReducer(reducer,{count:0})
  return (
    <div>
       <h1>{state.count}</h1>
       <button onClick={()=>dispatch({type:"one"})}>Increment 1</button>
       <button onClick={()=>dispatch({type:"two"})}>Increment 2</button>
       <button onClick={()=>dispatch({type:"three"})}>Increment 3</button>
    </div>
  )
}