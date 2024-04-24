import React, { Component } from 'react'

export default class State4 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
      }
    }

    changeCount() {
        this.setState({
            count: this.state.count + 1,
        })
    }
  render() {
    return (
      <>
        <h2>{this.state.count}</h2>
        <button onClick={()=>{
            this.changeCount()
        }}>Click Here</button>
      </>
    )
  }
}
