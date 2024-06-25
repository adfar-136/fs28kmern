import React from 'react'
import Blog from "./Blog"
function Item({fName,skills,person}) {
    let listItem = skills.map(item=> {
        return <li>{item}</li>
    })
  return (
    <div>
        <Blog fName={fName}/>
        <h1>{skills}</h1>
        <ul>
            {listItem}
        </ul>
        <h1>
            {person.age}
        </h1>
    </div>
  )
}

export default Item