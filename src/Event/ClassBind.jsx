import React, { Component } from 'react'

export default class  extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"hello"
      }
    }
    changeMessage(){
        this.setState({
            message:"good bye",
        })
        console.log(this); //if we use this without using fat arrow function the 'this' will be undefined
        console.log("hello");
    }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.changeMessage.bind(this)}>Click</button>
      </div>
    )
  }
}
