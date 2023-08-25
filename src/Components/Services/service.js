import React from 'react'
import './service.css'
import New from '../images/Group 1410066911.png'

import Blockchains from '../images/Blockchains.png'

const service = () => {
  return (
    <section id='service'>
    <img src={New} alt=""  className='service_new'/>
    
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