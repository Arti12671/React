import React, { Component } from 'react'

class Cond3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogin:false,
      }
    }
  render() {
    return (
      <div>
        {this.state.isLogin? <h1>USER PAGE</h1>:<h1>Guest Page</h1>}
        {this.state.isLogin && <h1>Guest Page</h1>}
      </div>
    )
  }
}
export default Cond3;