import React from 'react'
import Article from './Article'

export default function NewsList({articles,addFavorites}) {
  return (
    <div className='news-list'>
      {articles.map((item,index)=>{
        return <Article key={index} item={item} addFavorites={addFavorites}/>
      })}
    </div>
  )
}
