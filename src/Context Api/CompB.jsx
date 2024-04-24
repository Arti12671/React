import React, { Component } from 'react'
import CompC from './CompC'
import UserContext from './UserContext'

export class CompB extends Component {
  render() {
    return (
      <div>
        <CompC/>
        <h1>GOOD BYE {this.context}</h1>
      </div>
    )
  }
}
CompB.contextType = UserContext

export default CompB