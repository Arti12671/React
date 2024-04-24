import React, { Component } from 'react'
import ComUnmount1 from './ComUnmount1'

export class ComUnmount2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         toggle:true,
      }
    }

    toggleing1=()=>{
        this.setState({
            toggle: true
        })
    }
    toggleing2=()=>{
        this.setState({
            toggle: false
        })
    }
  render() {
    return (
      <>
        {
            this.state.toggle?<ComUnmount1/>:null
        }
        <button onClick={this.toggleing1}>Show Component</button>
        <button onClick={this.toggleing2}>Delete Component</button>
      </>
    )
  }
}

export default ComUnmount2