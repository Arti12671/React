import React, { useEffect, useState } from 'react'

const UseEffect7 = () => {
    const[x, setX]= useState(0)
    const[y, setY]= useState(0)
    const logPosition=((e)=>{
        setX(e.clientX)
        setY(e.clientY)
        console.log("mouse move")
    })
    useEffect(()=>{
        console.log("useEffect")
        window.addEventListener("mousemove", logPosition)

        return ()=>{
            window.removeEventListener("mousemove", logPosition)
        }
    })

  return (
    <div>
        X:{x},
        Y:{y}
    </div>
  )
}

export default UseEffect7