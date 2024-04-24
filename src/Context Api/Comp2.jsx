import React from 'react'
import Comp3 from './Comp3'

const Comp2 = (props) => {
  return (
    <div>
        <Comp3 name2 = {props.name1} />
    </div>
  )
}

export default Comp2