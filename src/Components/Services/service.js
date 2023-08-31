import React from 'react'
import './service.css'
import New from '../images/Ellipse 2009.png'

import Blockchains from '../images/Blockchains.png'

const service = () => {
  return (
    <section id='service'>

    <div className='service_line'> 
    
    <h1 className='service_new'>New</h1>
     
    <h1 className='service_one'>1 of 1s</h1>

    <h1 className='service_collections'>Top Collections</h1>
    <img src={New} alt="none" className='service_ellipse' />
    
    </div>


    
    <div className='service_chains'>
      <h3>All</h3>
      <h3>Painting</h3>
      <h3>Shorts</h3>
      <h3>Photography</h3>
      <h3>Illustrations</h3>
      <h3>3D</h3>
      <img src={Blockchains} alt="" className='service_chains_icon' />
    
    </div>
    <div ></div>
    
    
    
    </section>
  )
}

export default service