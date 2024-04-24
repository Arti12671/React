import React, { Component, Fragment } from 'react'

export default class Child extends Component {
  render() {
    console.log(this.props.human)
    return (
        
      <Fragment>
        <h3>MY  NAME IS {this.props.human.name}</h3>
      </Fragment>
    )
  }
}
