import React from 'react'
import BgImage from '../../assets/carousel-1.svg';

const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100vw",
}

const Hero = () => {
  return (
    <div style={bgImage}>Hero</div>
  )
}

export default Hero;