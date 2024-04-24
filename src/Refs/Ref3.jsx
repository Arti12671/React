import React, { Component } from 'react'

export class Ref3 extends Component {
  constructor(props) {
    super(props)

    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setcbRef = (element) => {
      this.cbRef = element
    }
    console.log(this.cbRef)
  }
  clickHandler = () => {
    if (this.cbRef) {
      alert(`${this.cbRef.value}`);
    } else {
      alert(`Invalid Input`);
    }
  }
  render() {
    return (
      <>
        <input type="text" name="" id="" ref={this.setcbRef} />
        <button onClick={this.clickHandler}>click here</button>
      </>
    )
  }
}

export default Ref3