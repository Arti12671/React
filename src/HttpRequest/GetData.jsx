import axios from 'axios'
import React, { Component } from 'react'

export class GetData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
        this.setState({
           posts: res.data
        })
    }).catch(()=>{
        alert(`Data no found`)
    })
    }
  render() {
    let {posts}=this.state
    return (
      <>
        {
            posts.length?posts.map((post)=>{
                return <div key={post.id}>
                  {post.id} {post.title}
                  </div>
            }):null
        }
      </>
    )
  }
}

export default GetData