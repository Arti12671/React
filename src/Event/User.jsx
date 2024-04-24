import React from 'react'
import { Login } from './Assignment2/Login'
import { SignUp } from './Assignment2/SignUp'

export const User = (props) => {
        if (props.isLogin) {
           return <Login/>
        } else{
            return <SignUp/>
        }
  
}
