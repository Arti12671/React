import React, { Component } from 'react'

class Cond1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isAvailable:true,
        }
    }
    render() {
        if (this.state.isAvailable) {
            return (
                    <h1>WELCOME TO USER</h1>
                )
        } else {
            return (
                <h1>WELCOME TO GUEST</h1>
            )   
        }
    }
}

export default Cond1