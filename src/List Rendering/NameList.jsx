import React from 'react'

export const NameList = () => {
    let name = ["bruce", "diana", "lee", "jorden"]
    // let nameList = name.map(names => <h1>{names}</h1>)

    let nameList = name.map((names)=>{
        return <h1>{names}</h1>  
    })
  return (
    <>
        {
            nameList
        }
    </>
  )
}
