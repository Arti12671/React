import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class CompE extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
            {
                (userName)=>{
                  return  <h1>Hello , {userName}</h1>
                }
            }
        </UserConsumer>
      </div>
    )
  }
}

export default CompE