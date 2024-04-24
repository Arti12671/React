import React, { Component } from 'react'

class Form1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName : "",
      }
    }

    handleUserName=(event)=>{
        console.log(event);
        this.setState({
            userName: event.target.value
        })
    }

    onSubmit=()=>{
        alert(`Hello ${this.state.userName}`)
    }
  render() {
    return (
      <>
        <form action="" onSubmit={this.onSubmit}>
            <input type="text" name="" id="" value={this.state.userName} onChange={this.handleUserName}/>
            <button type='submit' >SUBMIT</button>
        </form>
      </>
    )
  }
}

export default Form1