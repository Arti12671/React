import React, { Component } from 'react'

export class ErrorBoundries1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }
  render() {
    if (this.state.hasError) {
        return <img src="" alt="img not available!!" />
    }

    else{
        return this.props.children
    }
  }
}

export default ErrorBoundries1