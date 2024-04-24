import React, { Component } from 'react'
import "./Form.css"
import User from "./Assets/person.png"
import Email from "./Assets/email.png"
import Password from "./Assets/pass.png"

export class RegForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         action:"Sign Up"
      }
    }
    render() {
        return (
            <>
                <form action="">
                    <div className='main'>
                        <div className="text">{this.state.action}</div>
                        <div className="parent">
                            {
                                this.state.action==="Login"?<div></div>:
                                <div className="input">
                                    <img src={User} alt="" />
                                    <input type="text" placeholder='NAME' />
                                </div>
                            }
                            <div className="input">
                                <img src={Email} alt="email" />
                                <input type="email" name="" id="" placeholder='EMAIL' />
                            </div>
                            <div className="input">
                                <img src={Password} alt="pass" />
                                <input type="password" name="" id="" placeholder='PASSWORD' />
                            </div>
                            {/* <div className="one"> */}
                                <p>Password lost?  <span>Click here!</span></p>
                            {/* </div> */}
                            <div className="submit">
                                <div className={this.state.action==="Login"?"gray":"sign-up"} onClick={()=>{this.setState({action: "Sign Up"})}}>Sign Up</div>
                                <div className={this.state.action==="Sign Up"?"gray":"log"} onClick={()=>{this.setState({action: "Login"})}}>Login</div>
                            </div>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}

export default RegForm