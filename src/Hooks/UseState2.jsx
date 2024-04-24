import React, { useState } from 'react'

const UseState2 = () => {
    let[count, setCount]=useState(0)
    let increament=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <button onClick={increament}>{count}</button>
    </div>
  )
}

export default UseState2