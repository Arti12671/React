import React from 'react'
import { NavBar } from './NavBar'
import { Section } from './Section'
import { Aside } from './Aside'
import { Footer } from './Footer'
import "./wrapper.css"

export const Wrapped = () => {
    let components = [<NavBar/>,<Section/>,<Footer/>]
    let renderComp = components.map((comps=>{
        return (
          comps      
          )
    }))
  return (
    <div className='main'>
        {
            renderComp
        }
    </div>
  )
}
