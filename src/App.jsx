import { Component } from 'react';
import './App.css';

export default class CounterApp extends Component{
  constructor(){
    super();

    this.state = {
      counter : 0,
    }
  }

  dec = ()=>{
    if(this.state.counter>0){
    this.setState({
      counter:this.state.counter-1
    })
  }
}

  inc = ()=>{
    this.setState({
      counter:this.state.counter+1
    })
  }

  handleReset = ()=>{

   
    this.setState({counter:0})

  }


  render(){
    return(
      <div className="counter">


      <h1>Counter App</h1>


      <span className="output">{this.state.counter}</span>


      <div className="btncont">

        <button className="controlbutton" onClick={this.inc}>+</button>
        <button className="controlbutton" onClick={this.dec}>-</button>

        <button className="controlbutton" onClick={this.handleReset}>Reset</button>
        
      </div>
    </div>
    )
  }
}
