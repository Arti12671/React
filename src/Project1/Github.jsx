import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './github.css';
export const Github = () => {
    let[profile,setProfile]=useState([])
    useEffect(()=>{
       axios.get("https://api.github.com/users").then((response)=>{
        setProfile(response.data);
    }).catch(()=>{
        alert("data not found")
    })
})
  return (
    <div>
         {
                profile.map((pro) => {
                    return <div className="cards">
                        <div className="card">
                            <img src={pro.avatar_url} alt="" />
                            <div className="cardbody">
                                <span className="cardcategory">{pro.user}
                                    <h3 className="title">{pro.login}</h3>
                                    <a href={pro.url}>
                                        <button>View profile</button>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                })
            }
    </div>
  )
}