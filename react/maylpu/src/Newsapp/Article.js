import React from 'react'

export default function Article({item,addFavorites}) {
  return (
    <div className='article'>
        <h2>{item.title}</h2>
        <img src={item.urlToImage} height="200px" width="200px" alt={item.title} />
        <p>{item.description}</p>
        <a href={item.url} target="_blank" rel='noreferrer'>Read More</a>
        <button onClick={()=>addFavorites(item)}>Add To Favorites</button>
    </div>
  )
}
