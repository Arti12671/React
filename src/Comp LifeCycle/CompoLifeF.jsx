import React, { Component } from 'react'

export class CompoLifeF extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }
        console.log("CompoLifeF Constructor()")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("CompoLifeF getDeriverdStateFromProps()")
        return null
    }

    componentDidMount() {
        console.log("CompoLifeF componentDidMount()")
    }

    shouldComponentUpdate(){
        console.log("CompoLifeF shouldComponentUpdate()")
        return true;
    }
     getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("CompoLifeF getSnapshotBeforeUpdate()")
        return null;
     }

    componentDidUpdate(){
        console.log("CompoLifeF componentDidUpdate()")
        return null;
    }

    increamentCount = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }
    render() {
        console.log("CompoLifeF render()")
        return (
            <>
                <div>CompoLifeF</div>
                <button onClick={this.increamentCount}>Count { this.state.count}</button>
            </>
        )
    }
}

export default CompoLifeF