import React, { Component } from 'react'

export default class  extends Component {
  render() {
    return (
      <div>
        {/* <img src={this.props.photo} width={350} height={200} alt="" /> */}
        {/* <video src={this.props.video} controls></video> */}
        <iframe width="560" height="315" src={this.props.video} allowfullscreen></iframe>
      </div>
    )
  }
}
