import React, { useState } from 'react'
import UseEffect7 from '../Hooks/UseEffect7'

const UseCounter = () => {
    const[display, setDisplay]=useState(true)
  return (
    <div>
        <button onClick={()=>{setDisplay(!display)}}>TOGGLE DISPLAY</button>
        {
            display && <UseEffect7/>
        }
    </div>
  )
}

export default UseCounter