import React, { Component } from 'react'
import UpdateComponent from './HigherOrderComp'

export class OnMouseOver extends Component {
    render() {
        const{name, count1, increamentCount1}=this.props
        return (
          <div>
            <button onMouseOver={increamentCount1}>{name}{count1}</button>
          </div>
        )
      }
    }
    
    export default UpdateComponent(OnMouseOver)
