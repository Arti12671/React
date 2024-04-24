import React, { Component } from 'react'

export class Errorbounderies extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info){
        console.log(error);
        console.log(info)
    }
    render() {
        if (this.state.hasError) {
            return (
                <img src="" alt="spinner.jpg" />
            )
        }
        else {
            return (
                this.props.children
            )
        }
    }
}

export default Errorbounderies