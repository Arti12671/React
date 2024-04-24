import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
    let [count, setCount] = useState(0)

    useEffect(() => {
        document.title = count;
        console.log("hello");
    })
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => { setCount(count + 1) }}>ADD</button>
        </div>
    )
}

export default UseEffect2