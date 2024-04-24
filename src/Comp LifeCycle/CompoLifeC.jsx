import React, { Component } from 'react'
import CompoLifeD from './CompoLifeD'

export class CompoLifeC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
      console.log("CompoLifeC Constructor()")
    }
    static getDerivedStateFromProps(props,state){
        console.log("CompoLifeC getDeriverdStateFromProps()")
        return null
    }

    componentDidMount(){
        console.log("CompoLifeC componentDidMount()")
    }
    increamentCount = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }
  render() {
    console.log("CompoLifeC render()")
    return (
        <>
      <div>CompoLifeC</div>
      <CompoLifeD/>
      <button onClick={this.increamentCount}>Count { this.state.count}</button>
      </>
    )
  }
}

export default CompoLifeC