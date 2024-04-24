import React, { Component } from 'react'

class Form2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName:"",
         comment:"",
         skill:""
      }
    }

    handleUserName=(event)=>{
        this.setState({
            userName:event.target.value
        })
    }
    handleComment=(event)=>{
        this.setState({
            comment:event.target.value
        })
    }
    handleSkill=(event)=>{
        this.setState({
            skill:event.target.value
        })
    }
    onSubmit=()=>{
        alert(`Hello, ${this.state.userName}`)
    }
  render() {
    let {userName, comment, skill} = this.state;
    return (
      <>
        <form action="" onSubmit={this.onSubmit}>
            <div>
                <label htmlFor="">USERNAME</label>
                <input type="text" name="" id="" value={userName} onChange={this.handleUserName}/>
            </div>
            <br />
            <div>
                <label htmlFor="">COMMENT</label>
                <textarea name="" id="" cols="10" rows="10" value={comment} onChange={this.handleComment}></textarea>
            </div>
            <br />
            <div>
                <select name="" id="" value={skill} onChange={this.handleSkill}>
                    <option value="JAVA">JAVA</option>
                    <option value="WEBTECH">WEBTECH</option>
                    <option value="SQL">SQL</option>
                </select>
            </div>
            <br />
            <button type="submit">SUBMIT</button>
        </form>
        <br />
        <div>
        <h1>
            MY NAME IS {userName}
        </h1>
        <h1>
            MY Comment IS {comment}
        </h1>
        <h1>
            MY Skill IS {skill}
        </h1>
        </div>
      </>
    )
  }
}

export default Form2