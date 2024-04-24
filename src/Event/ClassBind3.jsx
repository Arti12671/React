import React, { Component } from 'react'

export default class ClassBind3  extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"hello"
      }
      this.changeMessage = this.changeMessage.bind() //Most efficient way
    }
    changeMessage(){
        this.setState({
            message:"good bye",
        })
        console.log(this);
        console.log("hello");
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Click</button>
      </div>
    )
  }
}
