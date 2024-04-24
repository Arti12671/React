import React from 'react'
import { Child } from './Child'

export const ParentComp = () => {
    let persons = [
        {   
            id:1,
            name:"Dharshan",
            skills:"java",
            age:"29"
        },
        {
            id:2,
            name:"Abhijit",
            skills:"Web tech",
            age:"26"
        }

    ]
  return (
    <div>
        {
            persons.map((person)=>{
                return <Child key={person.id} person1 = {person}/>
            })
        }
    </div>
  )
}
