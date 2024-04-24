import React, { useEffect, useState } from 'react'

const UseEffect5 = () => {
    let [count, setCount] = useState(0)
    let[name, setName]=useState("")
    useEffect(()=>{
        document.title=count
        console.log('Componenet Update');
    }, [count])
    return (
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <h3>{count}</h3>
            <button onClick={()=>{setCount(count+1)}}>ADD</button>
        </div>
    )
}

export default UseEffect5