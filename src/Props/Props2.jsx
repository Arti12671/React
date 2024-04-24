import React, { Component } from 'react'

export default class  extends Component {
  render() {
    return (
      <React.StrictMode>
        <h1>MY FRIENT NAME IS {this.props.name}</h1>
      </React.StrictMode>
    )
  }
}
