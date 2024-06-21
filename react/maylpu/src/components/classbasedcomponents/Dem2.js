import React, { Component } from 'react'

export default class Dem2 extends Component {
 componentWillUnmount(){
    console.log("unmounted")
 }
  render() {
    return (
      <div>
        <h1>Demo 2 component</h1>
      </div>
    )
  }
}
