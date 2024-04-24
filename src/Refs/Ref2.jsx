import React, { Component } from 'react'

export class Ref2 extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef1=React.createRef();
      this.inputRef2=React.createRef();

    }

    componentDidMount(){
        console.log(this.inputRef1)
    }
    clickHandle=()=>{
        if (this.inputRef1.current.value==="ajay@gmail.com" &&  this.inputRef2.current.value==="ajay@123") {
            alert(`Your name is ${this.inputRef1.current.value}`)
        } else {
            alert("Invalid Credintial")
        }
    }
  render() {
    return (
      <>
        <input type="email" name="" id="" ref={this.inputRef1}/>
        <input type="password" name="" id="" ref={this.inputRef2}/>
        <button onClick={this.clickHandle}>click here</button>
      </>
    )
  }
}

export default Ref2