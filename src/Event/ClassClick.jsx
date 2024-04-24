import React, { Component } from 'react'

class ClassClick extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"hello",
      }
    }

    changeMessage(){
        this.setState({
            message:"good bye",
        })
    }
  render() {
    const{message} = this.state;
    return (
      <div>
        <h2>{message}</h2>
        {/* <button onclick="changeMessage()"> Click</button> */}
        {/* <button onClick="changeMessage()"> Click</button> */}
        {/* Expected `onClick` listener to be a function, instead got a value of `string` type. */}

        {/* <button onClick={changeMessage()}> Click</button> */}
        {/*'changeMessage' is not defined */}

        {/* <button onClick={this.changeMessage()}> Click</button> */}
        {/* it will get into infinite loop */}

        {/* <button onClick={()=>{
            this.changeMessage()
        }}> Click</button> */}
      </div>
    )
  }
}

export default ClassClick