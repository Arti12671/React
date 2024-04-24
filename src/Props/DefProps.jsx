import React from 'react'

export const DefProps = (props) => {
  return (
    <>
        <h2>MY NAME IS {props.name} AND AGE IS {props.age}</h2>
    </>
  )
}

DefProps.defaultProps={ //default props value will be assigned if we don't pass the value manualy.
    name:"jay",
    age:23,
}
