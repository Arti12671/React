import React, { Component } from 'react'

export class UseEffect6 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x:0,
         y:0
      }
    }

    logPosition=((e)=>{
      this.setState({
        x:e.clientX,
        x:e.clientY,
      })
  })

    componentDidMount(){
      window.addEventListener("mousemove",this.logPosition)
      console.log("didMount")
    }
  render() {
    return (
      <div>
        X:{this.state.x}
        Y:{this.state.y}
      </div>
    )
  }
}

export default UseEffect6