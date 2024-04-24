import React, { Component } from 'react'

export class HOC2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
      }
    }

    increamentCount=()=>{
        this.setState((prevState)=>{
            return {count: prevState.count+1}
        })
    }
  render() {
    return (
      <div>
            <h2 onMouseOver={this.increamentCount}>HIGHER ORDER COMPONENT {this.state.count}</h2>
      </div>
    )
  }
}

export default HOC2