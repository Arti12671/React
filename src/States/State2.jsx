import React, { Component } from 'react'

export default class State2 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:"Subscribe Here"
      }
    }

    changeHandler(){
        this.setState({
            message:"THANK YOU FOR SUBSCRIPTION!"
        })
    }
  render() {
    return (
      <>
        <h2>{this.state.message}</h2>
        <button  onClick={()=>{
            this.changeHandler()
        }}>SUBSCRIBE</button>
      </>
    )
  }
}
