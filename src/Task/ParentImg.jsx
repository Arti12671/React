import React from 'react'
import ErrorBoundries1 from './ErrorBoundries1'
import ImgList from './ImgList'

const ParentImg = () => {
  return (
    <div>
        <ErrorBoundries1>
            <ImgList flowerLength={8}/>
        </ErrorBoundries1>
        <ErrorBoundries1>
            <ImgList flowerLength={9}/>
        </ErrorBoundries1>
    </div>
  )
}

export default ParentImg