import React, { Component } from 'react'

export class ComUnmount1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    componentWillUnmount(){
        alert("Component has been unmounted!!!")
        console.log("Component has been unmounted!!!")
    }
  render() {
    return (
      <>
      <h1>ComUnmount1</h1>
        <ul>
            <li>Name: Jayu</li>
            <li>Email: jayu@gmail.com</li>
            <li>Contact:7894561230</li>
        </ul>
      </>
    )
  }
}

export default ComUnmount1