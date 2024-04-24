import React, { Component } from 'react'
import { Login } from './Assignment2/Login'
import { SignUp } from './Assignment2/SignUp'

class User2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogin:true
      }
    }
  render() {
    return (
      <div >
        {this.state.isLogin?<Login/>:<SignUp/>}
      </div>
    )
  }
}

export default User2