import React, { Component } from 'react'
import CompB from './CompB'
import { UserProvider } from './UserContext'

export class CompA extends Component {
  render() {
    return (
      <div>
        {/* <UserProvider value={"RAMESH"}> */}
            <CompB/>
        {/* </UserProvider>  */}
      </div>
    )
  }
}

export default CompA