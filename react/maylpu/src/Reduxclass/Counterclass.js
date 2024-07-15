import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment,decrement } from './action'
class Counterclass extends Component {
  render() {
    const {count,increment,decrement} =this.props;
    console.log(count)
    return (
      <div>
        <button onClick={()=>increment()}>Increment</button>
        <h1>Count={count}</h1>
        <button onClick={()=>decrement()}>Decrement</button>
      </div>
    )
  }
}
const mapStateToProps =(state)=>(
 {
    count:state.count,
 }
)
const mapDispatchToProps=(dispatch)=>(
 {
    increment:()=>dispatch(increment()),
    decrement:()=>dispatch(decrement())
 }
)
export default connect(mapStateToProps,mapDispatchToProps)(Counterclass)