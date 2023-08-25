import React from 'react'
import './creator.css'
import FeedsI from '../images/img.png'
import Amichael from '../images/Rectangle.png'
import Oxdak from '../images/Rectangle (1).png'
import Ok19 from '../images/Rectangle (2).png'
import Sean from '../images/Rectangle (6).png'
import Ken  from '../images/Rectangle (3).png'
import Code  from '../images/Rectangle (4).png'
import M6sd  from '../images/Rectangle (5).png'
import D2se  from '../images/Rectangle (7).png'


const creator = () => {
  return (
    <section>
    <div className='container creator_container'>
    <div className='creator_content'>
      <div className='feeds'>
       <h4>Feeds</h4>
       <img src={FeedsI} alt="feedscreati"/>
       <h2>#215 Minority X H.E.R  <span className='creator_black'>sold   [</span> 0x694c…7489  <span  className='creator_black'>To</span>  Onallee.algo <span  className='creator_black'> ]</span> </h2>
       <h5>3 Minutes ago</h5>
      </div>
      <h1 className='creator_popular_text'>Popular Creator</h1>
       <div className="creator_popular">
       <div className='creator_almichael'>
        <img src={Amichael} alt="" className='creator_image'/>
        <h5 className='creator_blue'>Almichael.algo<p>710 NFT Drops</p></h5>
      </div>

       <div className='creator_oxdak'>
       <img src={Oxdak} alt="" className='creator_image'/>
       <h5 className='creator_blue'>Oxdak....Gd01s<p>710 NFT Drops</p></h5>
       </div>
        
       <div className='creator_ok19'> 
       <img src={Ok19} alt="" className='creator_image'/>
       <h5 className='creator_blue'>Ok19s....Wsa10<p>710 NFT Drops</p></h5>
       </div>
       
       <div className='creator_sean'> 
       <img src={Sean} alt="" className='creator_image'/>
       <h5 className='creator_blue'>Sean.algo<p>710 NFT Drops</p></h5>
       </div>
       
       <div className='creator_ken'> 
       <img src={Ken} alt="" className='creator_image'/>
       <h5 className='creator_blue'>Ken.algo<p>710 NFT Drops</p></h5>
       </div>
       
       <div className='creator_code'> 
       <img src={Code} alt="" className='creator_image'/>
       <h5 className='creator_blue'>Code.algo<p>710 NFT Drops</p></h5>
       </div>
       
       <div className='creator_m6sd'> 
       <img src={M6sd} alt="" className='creator_image'/>
       <h5 className='creator_blue'>M6sd....G9sd1<p>710 NFT Drops</p></h5>
       </div>
      
       <div className='creator_d2se'>  
       <img src={D2se} alt="" className='creator_image'/>
       <h5 className='creator_blue'>D2se7....0hj19<p>710 NFT Drops</p></h5>
       </div>
       </div>
    </div>
    
    </div>
    </section>
  )
}

export default creator