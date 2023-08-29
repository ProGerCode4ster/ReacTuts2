import React from 'react'
import './footer.css'
import Drop from '../images/Logo.png'
import Twitter from '../images/Group 624828.png'
import Pinata from '../images/Frame 1410066443.png'
import Love from '../images/Built with ♥️ by the Minority Programmers Association.png'

const footer = () => {
  return (
   <section id='footer'>
  
    <div className=' footer_container'>
     <div className="footer_content">
       <div className="footer_genadrop">
        <img src={Drop} alt=""/>
        <div className='footer_support'>
        <h3>
          Tools
        </h3>

        <h3>
          Quick Links
        </h3>
       
        <h3>
          support
        </h3>

        <h4>
        Create
        </h4>

        <h4>
        DAO
        </h4>

        <h4>
        FAQ
        </h4>

        <h4>
        Mint
        </h4>

        <h4>
        MPA
        </h4>
        
        <h4>
        Contact_us
        </h4>

        <h4>
        Marketplace
        </h4>
       
        <h4>
        MinorityNFT
        </h4>


      </div>
       </div>
        
       <div className="footer_twitter">
        <img src={Twitter} alt="" />  
       </div >


      




       <h3 className='footer_privacy'>This Project is in Public Beta<p>
       2022 Genadrop |  Privacy  |  Terms of Use  | Powered by <img src={Pinata} alt=""  className='footer_pinata'/>
       <img src={Love} alt="" className='footer_love'/>
       </p></h3>
       
    
       

       </div>
    </div>
    
   </section>
  )
}

export default footer