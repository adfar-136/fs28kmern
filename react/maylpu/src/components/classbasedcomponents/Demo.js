import React, { Component } from 'react'
import Dem2 from './Dem2';

export default class Demo extends Component {
    constructor(){
        super()
        console.log("construtor");
        this.state ={
            count:0,
            color:"red",
            text:"",
            allow:true
        }
        // this.handleIncrement = this.handleIncrement.bind(this)
    }
    handleIncrement(){
        this.setState({count:this.state.count+1})
    }
    shouldComponentUpdate(nextProps,nextState){
         console.log("nextprop: ",nextProps);
         console.log("nextstate: ", nextState);
         if(nextState.count >= 15){
          return false
         }
         return true
    }
    componentDidUpdate(prevProps,prevState){
      console.log("prevprop: ",prevProps);
      console.log("prevstate: ", prevState);
      if(prevState.count === 13){
            this.setState({text:"Congratulation you won!"})
      }
    }
    // static getDerivedStateFromProps(props,state){
    //      console.log("props:" ,props)
    //      console.log("State:" ,state)
    //     return {color:props.color}
    // }
    // componentDidMount(){
    //     setInterval(()=>{
    //         this.setState({count:this.state.count+1})
    //     },1000)
    // }
  render() {
    console.log("render")
    return (
      <div style={{backgroundColor:this.state.color}}>
        {this.state.allow && <Dem2/>}
        <button onClick={()=>this.setState({allow:!this.state.allow})}>Toggle Dem2 component</button>
        <h1>Hello world</h1>
        <h3>{this.state.count}</h3>
        <button onClick={()=>this.handleIncrement()}>Increment</button>
        <button onClick={()=>this.setState({color:"blue"})}>Blue</button>
        <h2>{this.props.fName}</h2>
        <h1>{this.state.text}</h1>
      </div>
    )
  }
}
