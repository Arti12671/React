import React, { Component } from 'react'

export default class Props1 extends Component {
  render() {
    let name = "Arti";
    let obj = {
        name:"sakshi",
        age:22,
        email:"sakshi@gmail.com"
    }  
    return (
      <>
        <h2>MY NAME IS {name}</h2>
        <h2>MY NAME IS {obj.name} AND AGE IS {obj.age}</h2>
      </>
    )
  }
}
