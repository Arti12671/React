import React, { Component } from 'react'
import Memo from './Memo'

export default class ParentMemo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Jayu",
         count:0
      }
    }

    clickHandler=()=>{
        this.setState({
            name:"sakshi"
        })
    }
    clickIncreament=()=>{
        this.setState({
            count: this.state.count+1,
        })
    }
  render() {
    console.log(this.state.count)
    console.log("*****Parent Memo*****");
    return (
      <>
        <Memo count1={this.state.count}/>
        <button onClick={this.clickHandler}>Change</button>
        <button onClick={this.clickIncreament}>Increament</button>
      </>
    )
  }
}

