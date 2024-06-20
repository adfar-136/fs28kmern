import React, { Component } from 'react'

export default class Demo extends Component {
    constructor(){
        super()
        console.log("construtor");
        this.state ={
            count:0,
            color:"red"
        }
        // this.handleIncrement = this.handleIncrement.bind(this)
    }
    handleIncrement(){
        this.setState({count:this.state.count+1})
    }
    static getDerivedStateFromProps(props,state){
         console.log("props:" ,props)
         console.log("State:" ,state)
        return {color:props.color}
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({count:this.state.count+1})
        },1000)
    }
  render() {
  
    console.log("render")
    return (
      <div style={{backgroundColor:this.state.color}}>
        <h1>Hello world</h1>
        <h3>{this.state.count}</h3>
        <button onClick={()=>this.handleIncrement()}>Increment</button>
        <button onClick={()=>this.setState({color:"blue"})}>Blue</button>
        <h2>{this.props.fName}</h2>
      </div>
    )
  }
}
