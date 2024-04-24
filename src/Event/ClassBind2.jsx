import React, { Component } from 'react'

export default class ClassBind2 extends Component {
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
        console.log(this);
        console.log("hello");
    }
  render() {
    return (
      <div>
        <button onClick={()=>{
            this.changeMessage()
        }}>Click</button>
      </div>
    )
  }
}
