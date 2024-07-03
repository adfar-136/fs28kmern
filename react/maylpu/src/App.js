import React, { useEffect, useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import NewsList from './Newsapp/NewsList'
import Favorites from './Newsapp/Favorites'
import Header from './Newsapp/Header'
import axios from 'axios'

export default function App() {
  const [query,setQuery] =useState("tesla")
  const [page,setPage] = useState(1)
  const [articles,setArticles] = useState([])
  const [favorites,setFavorites] = useState([])
  useEffect(()=>{
    fetchArticles(query,page)
  },[query,page])
  useEffect(()=>{
    const favArticles= JSON.parse(localStorage.getItem('favorites'))
    setFavorites(favArticles)
  },[])
  const fetchArticles =async (query,page)=>{
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&from=2024-06-03&sortBy=publishedAt&pageSize=5&page=${page}&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e`)
      setArticles(response.data.articles)

  }
  const addFavorites =(article)=>{
    let newFavorites = [...favorites,article]
    setFavorites(newFavorites)
    localStorage.setItem('favorites',JSON.stringify(newFavorites))
  }
  const removefavorites=(title)=>{
    const newFav = favorites.filter((item)=>item.title !== title)
    setFavorites(newFav)
    localStorage.setItem('favorites',JSON.stringify(newFav))
  }
  return (
     
    <BrowserRouter>
      <div className='App'>
        <Header setQuery={setQuery} fetchArticles={fetchArticles}/>
        <header>

          <nav>
              <NavLink to="/">Home</NavLink> <br />
              <NavLink to="/favorites">Favorites</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={
            <>
              <NewsList articles={articles} addFavorites={addFavorites}/>
            </>
          }/>
          <Route path='/favorites' element={<Favorites favorites={favorites} removeFav={removefavorites}/>}/>
        </Routes>
      </div>
    </BrowserRouter>   
  )
}
