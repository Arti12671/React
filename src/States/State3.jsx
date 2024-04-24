import React, { Component } from 'react'

export default class State3 extends Component { 
    constructor(props) {
      super(props)
    
      this.state = {
         user:this.props.user
      }
    }

    changeUser(){
        this.setState({
            user:"sakshi is student"
        })
    }
  render() {
    return (
      <>
            <h2>{this.state.user}</h2>
            <button onClick={()=>{
                this.changeUser()
            }}>Click Here</button>
      </>
    )
  }
}
