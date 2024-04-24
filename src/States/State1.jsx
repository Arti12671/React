import React, { Component } from 'react'

export default class 

//states(Heart of reactjs)
 extends Component {
    constructor(props){ //It belongs to the supermost class itself.//rconst
        super(props)

        this.state = { 
            message:" WELCOME USER!!!"
        }
    }
  render() {
    return (
      <div>
            <h2>{this.state.message}</h2>
      </div>
    )
  }
}
