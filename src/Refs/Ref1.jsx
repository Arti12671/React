import React, { Component } from 'react'

export class Ref1 extends Component {
    constructor(props) {
      super(props)
    
    this.inputRef=React.createRef(); //create the refence of dom 
     console.log(this.inputRef);
    }

    componentDidMount(){ //will mount
        console.log(this.inputRef);
        // console.log(this.inputRef.current.className);
        this.inputRef.current.focus();
    }

    clickHandler=()=>{
        alert(`${this.inputRef.current.value}`)
    }
  render() {
    return (
      <React.StrictMode>
            <input  type="text" name="" className='inp1' id="" ref={this.inputRef} />
            <button onClick={this.clickHandler}>click</button>
      </React.StrictMode>
    )
  }
}

export default Ref1