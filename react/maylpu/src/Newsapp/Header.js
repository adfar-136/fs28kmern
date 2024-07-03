import React, { useEffect, useState } from 'react'

export default function Header({setQuery,fetchArticles}) {
    const [text,setText] = useState("")
    useEffect(()=>{
      if(text.length > 0){
        fetchArticles(text,1)
      }
    },[text,fetchArticles])
    const handleSubmit=(e)=>{
       e.preventDefault()
       setQuery(text)
       setText("")
    }
  return (
    <header className="header">
        <h1>Adfar's News Appp</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder="Search..." />
            <button type='submit'>Search</button>
        </form>
    </header>
  )
}
