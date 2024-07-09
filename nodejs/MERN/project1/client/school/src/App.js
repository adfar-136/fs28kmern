import React, { useEffect, useState } from 'react'

export default function App() {
  const [students,setStudents] = useState([])
  const [form,setForm] = useState({name:'',currentClass:'',division:''})
  const [editid,seteditid] = useState(null)
  useEffect(()=>{
    fetchStudents()
  },[])
  const fetchStudents = async ()=>{
      try {
        const response =await fetch('http://localhost:8000/api/student')
        const data = await response.json()
        setStudents(data)
      } catch (error) {
        console.log("error", error)
      }
  }
  async function handleSubmit(event){
      event.preventDefault()
      const url = editid ? `http://localhost:8000/api/student/${editid}` : 'http://localhost:8000/api/student/'
      const method =editid ? 'PUT' : 'POST';
      try {
         const response = await fetch(url,{
          method,
          headers:{'Content-type':'application/json'},
          body:JSON.stringify(form)
         })
         if(response.ok){
          fetchStudents();
          setForm({name:'',currentClass:'',division:''})
          seteditid(null)
         } else{
          console.log("error ", response.statusText)
         }
      } catch (error) {
        console.log(error)
      }
  }
  function handleChange(event){
    const {name,value} = event.target;
    setForm((prev)=>({...prev,[name]:value}))
  }
  function handleEdit(student){
    setForm({name:student.name, currentClass:student.currentClass,division:student.division})
    seteditid(student.id)
  }
  async function handleDelete(id){
    try {
      const response = await fetch(`http://localhost:8000/api/student/${id}`,{method:"DELETE"})
      if(response.ok){
        fetchStudents()
      }else{
        console.log("error deleting item")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" 
        name="name"
        value={form.name} onChange={handleChange}
        required/>
        <input type="number" placeholder="Enter your currentClass"
        name='currentClass'
        value={form.currentClass} onChange={handleChange}
        required/>
        <input type="text" placeholder='Enter your division'
        name='division'
        value={form.division} onChange={handleChange}
        required/>
        <button type='submit'>{editid ? 'Update':'Add'}</button>
      </form>
      <ul>
        {students.map((student)=>{
          return <li key={student.id}>{student.name} (class: {student.currentClass}) (Division: {student.division})
             <button onClick={()=>handleEdit(student)}>Edit</button>
             <button onClick={()=>handleDelete(student.id)}>Delete</button>
          </li>
        })}
      </ul>
    </div>
  )
}
