import React from 'react'

export const KeyRend = () => {
    let fruits = ["apple", "pineapple","mango"]
  return (
    <div>
        {
            fruits.map((fruit, index)=>{
                return <h1 key={index}>{index}.{fruit}</h1>
            })
        }
    </div>
  )
}
