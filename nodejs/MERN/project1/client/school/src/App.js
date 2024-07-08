import {useEffect, useState} from "react"
function App() {
  const [data,setData] = useState({})
  useEffect(()=>{
    fetch("http://localhost:3000")
    .then((res)=>{
      if(!res.ok){
        throw new Error("Something went wrong")
      } 
      return res.json()
    }).then(data => {
      setData(data)
    })
  })
  return (
    <div>
      <h1>My First React App</h1>
      <h1>{data.message}</h1>
      <h1>Name : {data.name}</h1>
      <h1>Age; {data.age}</h1>
      <h1>Gender : {data.gender}</h1>
      <h1>City : {data.city}</h1>
    </div>
  );
}

export default App;
