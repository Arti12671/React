import React from 'react'

const External1 = (props) => {
    let classname1 = props.primary?"primary":"secondary"
  return (
    <h1 className={`${classname1} font-axel heading`}>EXTERNAL STYLING</h1>
  )
}

export default External1