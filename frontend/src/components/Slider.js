import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { StaticImage } from 'gatsby-plugin-image';

const Slider = () => {
  return (
    <>
    <Carousel>
        <Carousel.Item interval={1000}>
            <StaticImage src='../images/carousel2.jpg' alt="First slide" />        
        </Carousel.Item>
        <Carousel.Item interval={500}>
            <StaticImage src='../images/carousel1.jpg' alt="Second slide" />     
        </Carousel.Item>
        <Carousel.Item>
            <StaticImage src='../images/carousel3.jpg' alt="Third slide" />        
        </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Slider
