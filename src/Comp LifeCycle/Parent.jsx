import React from 'react'
import Errorbounderies from './Errorbounderies'
import Hero from './Hero'

const Parent = () => {
  return (
    <div>
        <Errorbounderies>
            <Hero heroName={"batman"}/>
        </Errorbounderies>
        <Errorbounderies>
            <Hero heroName={"spiderman"}/>
        </Errorbounderies>
        <Errorbounderies>
            <Hero heroName={"ironman"}/>
        </Errorbounderies>
        <Errorbounderies>
            <Hero heroName={"joker"}/>
        </Errorbounderies>
    </div>
  )
}

export default Parent