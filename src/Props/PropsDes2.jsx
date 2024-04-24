import React, { Component } from 'react'

export default class PropsDes2 extends Component {
  render() {
    let{name, age, email} = this.props.obj;
    return (
      <>
        <h3>MY NAME IS {name} AND EMAIL IS {email}</h3>
      </>
    )
  }
}
