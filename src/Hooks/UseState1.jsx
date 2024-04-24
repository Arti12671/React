import React, { useState } from 'react'

const UseState1 = () => {
    let [count, setCount] = useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{
                setCount(count+1)
            }}>INCREAMENT</button>
        </div>
    )
}

export default UseState1