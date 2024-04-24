import React, { useEffect, useState } from 'react'

const UseEffect3 = () => {
    let [count, setCount] = useState(0)

    console.log("bye")
    let add = () => {
        setCount(count + 1)
        document.title = count
    }
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={add}>ADD</button>
        </div>
    )
}

export default UseEffect3