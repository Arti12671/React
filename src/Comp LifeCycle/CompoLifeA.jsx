import React, { Component } from 'react'

export class CompoLifeA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      console.log("CompoLifeA Constructor()")
    }
    static getDerivedStateFromProps(props,state){
        console.log("CompoLifeA getDeriverdStateFromProps()")
        return null
    }

    componentDidMount(){
        console.log("CompoLifeA componentDidMount()")
    }
  render() {
    console.log("CompoLifeA render()")
    return (
      <div>CompoLifeA</div>
    )
  }
}

export default CompoLifeA