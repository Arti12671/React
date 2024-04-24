import React, { useState } from 'react'

const UseState3 = () => {
    let initialValue = 0
    let [count, setCount] = useState(initialValue)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>INCREAMENT</button>
            <button onClick={() => {
                setCount(count - 1)
            }}>DECREAMENT</button>
            <button onClick={() => {
                setCount(initialValue)
            }}>RESET</button>
        </div>
    )
}

export default UseState3