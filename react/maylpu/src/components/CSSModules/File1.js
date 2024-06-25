import React from 'react'
import style from "./File1.module.css"
export default function File1() {
  console.log(style)
  return (
    <div className={style.container1}>
      <p className={style.heading1}>Hello</p>
        <h1 className={`${style.heading1} ${style.para}`}>This is m File1 headeing</h1>
        <div id={style.main}>
          <p className={style.para}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum tempora voluptates ratione nostrum expedita laudantium harum saepe temporibus culpa enim.</p>
          <h1 className={style.myContainer}>adfar</h1>
          <h2 className={style.my_main}>Hello</h2>
          <h1 className={style.main}>Newton</h1>
          <h3 className={style["my-section"]}>Good morning</h3>
        </div>
    </div>
  )
}
