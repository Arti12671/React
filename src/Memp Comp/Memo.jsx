import React from 'react'

const Memo = ({count1}) => {
    console.log("*****Memo Comp*****")
    // console.log(name1)
    console.log(count1)
  return (
    <>
        {/* <h1>My Name is {name1}</h1> */}
        <h1>Count is {count1}</h1>
    </>
  )
}

export default React.memo(Memo)