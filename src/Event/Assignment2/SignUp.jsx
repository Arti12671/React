import React from 'react'
import "./App.css"
export const SignUp = () => {
    return (
        <div>
            
            <form action="" id='form2'>
            <h3 style={{textAlign:"center"}}>SING UP FORM</h3>
                <table  >
                    
                    <tr>
                        <td>Id</td>
                        <td><input type='text' /></td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td><input type='text' /></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input type='email' /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type='password'  /></td>
                    </tr>
                </table>
                <input type="submit" value="SING Up" />
            </form>
        </div>
    )
}
