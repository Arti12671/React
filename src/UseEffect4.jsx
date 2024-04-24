import React, { Component } from 'react'

export class UseEffect4 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: '',
        }
    }
    componentDidMount() {
        document.title=`You Clicked ${this.state.count}`
        console.log("componentDidMount")

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count != this.state.count) {
            document.title=`You Clicked ${this.state.count}`
            console.log("componentDidUpdate")
        }
    }
    render() {
        return (
            <div>
                <input type="text"  value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}/>
                <h4>{this.state.count}</h4>
                <button onClick={()=>{this.setState({count: this.state.count+1})}}>ADD</button>
            </div>
        )
    }
}

export default UseEffect4