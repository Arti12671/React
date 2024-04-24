import React, { Component } from 'react'
import axios from 'axios'
export default class PostData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: "",
            empId: "",
            contact: "",
            emailId: ""
        }
    }
    onchangeHandle = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmit = () => {
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state).then((res) => {
            console.log(res);
        }).catch(() => {
            alert("data is not posted!")
        })
    }
    onGet = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            console.log(res.data);
        }).catch(() => {
            alert("data is not available!")
        })
    }
    onUpdate = () => {
        axios.put("https://jsonplaceholder.typicode.com/posts/1", this.state).then((res) => {
            console.log(res);
        }).catch(() => {
            alert("data is not updated!")
        })
    }
    onDelete = () => {
        axios.delete("https://jsonplaceholder.typicode.com/posts/1", this.state).then((res) => {
            console.log(res);
        }).catch(() => {
            alert("data is not deleted!")
        })
    }
    render() {
        let { userName, empId, contact, emailId } = this.state
        return (
            <>
                <div>
                    <form action="" onSubmit={this.onSubmit}>
                        <div>User Name:<input onChange={this.onchangeHandle} type="text" name='userName' value={userName} /></div>
                        <div>Emp Id:<input onChange={this.onchangeHandle} type="text" name='empId' value={empId} /></div>
                        <div>Contact:<input onChange={this.onchangeHandle} type="text" name='contact' value={contact} /></div>
                        <div>Email Id:<input onChange={this.onchangeHandle} type="email" name='emailId' value={emailId} /></div>
                        <button>SUBMIT</button>
                        <button onClick={this.onGet}>GET</button>
                        <button onClick={this.onUpdate}>UPDATE</button>
                        <button onClick={this.onDelete}>DELETE</button>
                    </form>
                </div>
            </>
        )
    }
}