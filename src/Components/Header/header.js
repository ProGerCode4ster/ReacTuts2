import React from 'react'
import './header.css'
import Coins from '../images/Group 1410066928.png'
import Coins2 from'../images/Group 1410066929.png'
import Blockchain from'../images/All.png'
import Algorand from'../images/Algorand.png'
import Polygon from'../images/Polygon 1.png'
import Aurora from'../images/Aurora 1.png'
import Solana from'../images/Solana 1.png'
import Avalanche from'../images/Near 1.png'
import Celo from'../images/Celo 1.png'
import Question from'../images/Component 79.png'


const header = () => {
  return (

    <header>
    <div className='container header_container'>
      <div className="header_content">
       
      <img src={Coins} alt="" />

         <div className='header_text'>
       <h1>Find,Buy and Sell NTFs across <p></p>blockchains</h1>
       <input type="text"  className='header_input'
        placeholder='Search by collection or 1 of 1s'
        
       />
       <h4>1 of 1s Collections Photographs Creators</h4>
         </div>

       <img src={Coins2} alt="" />


       </div>
       <div className="header_groups">
        <img src={Blockchain} alt="" />
        <img src={Algorand} alt="" />
        <img src={Polygon} alt="" />
        <img src={Aurora} alt="" />
        <img src={Solana} alt="" />
        <img src={Avalanche} alt="" />
        <img src={Celo} alt="" />
       </div>
       <h1><p className='Features'>Featured NFTs <img src={Question} alt="" /></p></h1>
      
    </div>
   
    </header>
  )
}

export default header