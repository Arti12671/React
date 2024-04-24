import React, { Component } from 'react'

export class CompoLifeB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }
        console.log("CompoLifeB Constructor()")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("CompoLifeB getDeriverdStateFromProps()")
        return null
    }

    componentDidMount() {
        console.log("CompoLifeB componentDidMount()")
    }

    increamentCount = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }
    render() {
        console.log("CompoLifeB render()")
        return (
            <>
                <div>CompoLifeB</div>
                <button onClick={this.increamentCount}>Count { this.state.count}</button>
            </>
        )
    }
}

export default CompoLifeB