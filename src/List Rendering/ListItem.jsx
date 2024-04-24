import React from 'react'

export const ListItem = () => {
    let fruits = ["apple","pineapple","mango","watermelon"]
  return (
    <>
        {
            fruits.map((fruit)=>
               <ul>
                    <li>{fruit}</li>
                </ul>
            )
        }
    </>
  )
}
