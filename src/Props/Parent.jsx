import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  render() {
    return (
      <>
        <Child human = {{name:"jayesh", eyeColor:"blue"}}/>
      </>
    )
  }
}
