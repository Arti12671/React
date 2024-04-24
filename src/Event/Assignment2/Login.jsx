import React from 'react'
import "./App.css"

export const Login = () => {
  return (
    <div>
        
        <form action="" id='form1'>
        <h3 style={{textAlign:"center"}}>LOGIN FORM</h3>
            <table >
                <tr>
                    <td><label>Email</label></td>
                    <td><input type='email'/></td>
                </tr>
                <tr>
                    <td><label>Password</label></td>
                    <td><input type='password' placeholder='' /></td>
                </tr>
                {/* <tr colspan = "2"></tr> */}
            </table>
            <input type="submit" value="LOGIN" />
        </form>
    </div>
  )
}
