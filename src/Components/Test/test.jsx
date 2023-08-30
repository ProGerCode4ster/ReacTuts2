import React from 'react'
import './test.css'
import Hindi from '../images/Hindi.png'
import Industry from '../images/Rectangle 2.png'
import Paper from '../images/1-kid-school-monsoon-environment-photography-by-anindya-phani 1 (1).png'
import School from '../images/1-kid-school-monsoon-environment-photography-by-anindya-phani 1.png'
import { Carousel } from 'react-responsive-carousel';


const Test = () => {
  return (
    <Carousel>
  {/* <Carousel.Item>
    <image className="" src={Hindi} alt="slide 1" />
  </Carousel.Item>
  <Carousel.Item>
    <image className="" src={Industry} alt="slide 2" />
  </Carousel.Item> */}
  <div>
    <image className="" src={Paper} alt="slide 3" />
  </div>
  </Carousel>
  )
}

export default Test