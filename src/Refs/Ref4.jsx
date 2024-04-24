import React, { Component } from 'react'

export class Ref4 extends Component {
    constructor(props) {
      super(props)
    
      this.refComp=React.createRef();

      this.state = {
         img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
      }
    }
    componentDidMount(){
        console.log(this.refComp)
    }
    clickHandler=()=>{
        this.refComp.current.style.height = "200px"
        this.refComp.current.style.width = "200px"
        this.refComp.current.style.border = "1px solid"
        this.refComp.current.style.backgroundImage = "url(`${this.state.img}`)"
        this.refComp.current.style.backgroundPosition = "center"
        this.refComp.current.style.backgroundSize = "cover"
        this.refComp.current.style.backgroundRepeat = "no-repeat"
    }
  render() {
    return (
      <>
        <div ref={this.refComp}>

        </div>
        <button onClick={this.clickHandler}>click here</button>
      </>
    )
  }
}

export default Ref4