import React, { Component } from 'react'

class Cond2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogin:true
      }
    }
  render() {
    let message;
    if (this.state.isLogin) {
        message = <h1>WELCOME TO USER q</h1>
    } else {
        message = <h1>WELCOME TO GUEST</h1>
    }
    return (
      <div style={{color:"black"}}>
        {message}
      </div>
    )
  }
}

export default Cond2