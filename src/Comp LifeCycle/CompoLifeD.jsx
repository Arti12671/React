import React, { Component } from 'react'

export class CompoLifeD extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
      console.log("CompoLifeD Constructor()")
    }
    static getDerivedStateFromProps(props,state){
        console.log("CompoLifeD getDeriverdStateFromProps()")
        return null
    }

    componentDidMount(){
        console.log("CompoLifeD componentDidMount()")
    }
    increamentCount = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }
  render() {
    console.log("CompoLifeD render()")
    return ( 
        <>
        <div>CompoLifeD</div>
        {/* <button onClick={this.increamentCount}>Count { this.state.count}</button> */}
    </>
    )
  }
}

export default CompoLifeD