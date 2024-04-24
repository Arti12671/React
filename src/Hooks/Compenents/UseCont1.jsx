import React from 'react'
import UseCont2 from './UseCont2';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
const UseCont1 = () => {

  return (
    <div>
      <UserContext.Provider value={"Arti"}>
        <ChannelContext.Provider value={"Qspiders"}>
          <UseCont2 />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default UseCont1