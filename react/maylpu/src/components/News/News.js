import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
    constructor(){
        super()
        this.state={
            articles:[],
        }
    }
    componentDidMount(){
        fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-05-21&sortBy=publishedAt&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e")
        .then(response => response.json())
        .then(result=>this.setState({articles:result.articles}))
    }
    
  render() {
    console.log(this.state.articles)
    return (
      <div>
        <h1>News Headline website</h1>
        {this.state.articles?this.state.articles.map((item)=>{
            return <Newsitem author={item.author}
            description={item.description}
            img={item.urlToImage} title={item.title}
            url={item.url}/>
        }):"Loading...."}
      </div>
    )
  }
}
