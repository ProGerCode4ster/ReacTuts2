import React from 'react'
import './navbar.css'
import logo from '../images/Group 624786.png'
import Micon from '../images/image 169.png'
import Notify from '../images/Notification.png'

const navbar = () => {
  return (
    <nav id='navbar'>
    
    <div className='container navbar_container'>
    <div className="navbar_content">
    <img src={logo} alt="gena drop"  className='navbar_icon'/>
   <input type="text" className='navbar_input'
          placeholder='Search Collections or 1 of 1s'
         
   />
    <h5>Create</h5>
    <h5>Mint</h5>
    <h5>Explore</h5>

    <div className='navbar_micondiv'><img src={Micon} alt="" className='navbar_micon'/><h6 className='navbar_micontext'> IJQz4a...360fdb7</h6></div>
    
    <h6 className='navbar_mainnet'>Mainnet</h6>

    <img src={Notify} alt="" className='navbar_notify'/>

    </div>
    
    </div>
    
    
    
    </nav>
  )
}

export default navbar