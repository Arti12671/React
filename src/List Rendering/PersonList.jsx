import React from 'react'

export const PersonList = () => {
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

    let personsList = persons.map(person=>{
        return (<h2>TRAINER NAME: {person.name}  TRAINER SUBJECT: {person.skills} </h2>)
    })
  return (
    <div>
        {
            personsList
        }
    </div>
  )
}
