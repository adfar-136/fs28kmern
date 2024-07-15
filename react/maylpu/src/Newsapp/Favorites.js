import React from 'react'

export default function Favorites({favorites,removeFav}) {
  return (
    <div>
      <h1>Favorites Articles hain</h1>
      {favorites.map((item,index)=>{
        return <div>
          <h2>{item.title}</h2>
          <img src={item.urlToImage} height="200px" width="200px" alt={item.title} />
        <p>{item.description}</p>
        <a href={item.url} target="_blank" rel='noreferrer'>Read More</a>
        <button onClick={()=>removeFav(item.title)}>Remove from favorites</button>
        </div>
      })}
    </div>
  )
}
