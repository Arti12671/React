import React, { Component } from 'react'

export class UseEffect1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }
    }

    componentDidMount() {
        console.log("componentDidMount")
        document.title = this.state.count
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate")
        document.title = this.state.count
    }
    render() {
        return (
            <div>
                <h3>{this.state.count}</h3>
                <button onClick={() => {
                    this.setState({ count: this.state.count + 1 })
                }}>UPDATE</button>
            </div>
        )
    }
}

export default UseEffect1