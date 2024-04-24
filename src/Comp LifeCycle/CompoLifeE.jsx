import React, { Component } from 'react'

export class CompoLifeE extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }
        console.log("CompoLifeE Constructor()")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("CompoLifeE getDeriverdStateFromProps()")
        return null
    }

    componentDidMount() {
        console.log("CompoLifeE componentDidMount()")
    }

    increamentCount = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }
    render() {
        console.log("CompoLifeE render()")
        return (
            <>
                <div>CompoLifeE</div>
                <button onClick={this.increamentCount}>Count { this.state.count}</button>
            </>
        )
    }
}

export default CompoLifeE