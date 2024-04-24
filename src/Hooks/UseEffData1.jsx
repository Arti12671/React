import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Style from "../Style/mystyle.module.css"
const UseEffData1 = () => {
    let [posts, setPost] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            console.log(response.data);
            setPost(response.data)
        }).catch(() => {
            alert("data not available!")
        })
    })
    return (
        <div>
            {

                posts.map((post) => {
                    return <ul className={Style.parent} type='none'>
                        <h1><li className={Style.li} key={post.id}>{post.id}. {post.title}</li></h1>
                        <p><li>{post.body}</li></p>
                        </ul>
                })
            }
        </div>
    )
}

export default UseEffData1