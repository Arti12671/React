import React from 'react'

export const Props6 = (props) => {
    let {model, price, make}=props.obj;
  return (
    <div>
        {/* <h3>MY NAME IS {props.name}</h3> */}
        {/* before destructuring */}
        {/* <h2>MODEL IS {props.obj.model}, PRICE IS {props.obj.price} AND MAKE IS {props.obj.make}</h2> */}
        {/* After destructuring */}

        <h2>MODEL IS {model}, PRICE IS {price} AND MAKE IS {make}</h2>
    </div>
  )
}
