import React from 'react'
import { SlideWrapper } from '../../styles/HomePageStyles'

const Slide = ({content}) => {
  return (
    <video className="video" src={content}
	autoPlay
    loop
    playsInline
    muted 
	>
	</video>
  )
}

export default Slide


