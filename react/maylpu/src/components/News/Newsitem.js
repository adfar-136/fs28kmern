import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    return (
      <div>
        <mark>Author Name: {this.props.author ? this.props.author:"No author available"}</mark>
        <h2>Title: {this.props.title?`${this.props.title.slice(0,35)}...`:"No title present"}</h2>
        <p>Description: {this.props.description?` ${this.props.description.slice(0,70)}...`:"No description available"}</p>
        <img src={this.props.img?this.props.img:"https://www.nzherald.co.nz/resizer/v2/SCORX5PZE5AODA5YS7OW2GVYDI.jpg?auth=eae57f6a7760df80297abb279a2afbe31948441e0756d1f3c568d240dbea91cb&width=1200&height=675&quality=70&smart=true"} alt="news" height="200px" width="200px" style={{borderRadius:"100px"}}/>
        <a href={this.props.url} target='_blank' rel="noreferrer" >Read more...</a>

      </div>
    )
  }
}
