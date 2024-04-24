import React, { useContext } from 'react'
import UseCont5 from './UseCont5'
import { ChannelContext, UserContext } from './UseCont1'

const UseCont4 = () => {
  const user= useContext(UserContext);
  const channel= useContext(ChannelContext);
  return (
    <div>
        <UseCont5/>
        <h1>My Name Is {user} And Channel Name is {channel}</h1>
    </div>
  )
}

export default UseCont4