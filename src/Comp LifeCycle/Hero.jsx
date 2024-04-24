import React from 'react'

const Hero = ({heroName}) => {
    if (heroName==="joker") {
        throw new Error(`${heroName} is not a hero!!!`)
    }
  return (
    <div>
        {heroName}
    </div>
  )
}

export default Hero