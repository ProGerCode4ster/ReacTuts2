import React from 'react'
import Hindi from '../images/Hindi.png'
import Industry from '../images/Rectangle 2.png'
import Paper from '../images/1-kid-school-monsoon-environment-photography-by-anindya-phani 1 (1).png'
import School from '../images/1-kid-school-monsoon-environment-photography-by-anindya-phani 1.png'
import Arrowleft from '../images/Group 1410066285.png'
import Arrowright from '../images/CaretCircleLeft.png'
import Micon from '../images/image 169.png'
import { Carousel } from 'react-responsive-carousel';

import './about.css'

import{Pagination, Navigation, Scrollbar, A11y} from 'swiper/modules'
import{Swiper , SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'


export const about = () => {
 const aboutContent = [
{
 image : Hindi,
 id: 1,
 title: 'Shela, a Hat story',
 icon : Micon,
 pricetext:'Floor Price',
 price:'22 ALGO(9.75 USD)',
 priceA:'1,753 NFTs',
 text:'A shy smile and a thatched floppy hat. Modesty is in her aura.' 
},

{
    image : Industry,
    id: 2,
    title: 'Mining coins',
    icon : Micon,
    pricetext:'Floor Price',
    price:'22 ALGO(9.75 USD)',
    priceA:'1,753 NFTs',
    text:'Atari AlphaVerse is a metaverse, part of the AlphaVerse, offering whole experience it’s ... '
},

{
    
    image : School,
    id: 3,
    icon : Micon,
    page: '1 of 1',
    pricetext:'Price',
    price:'22 ALGO(9.75 USD)',
    priceS:'Buy',
    Btext:'Building Of the future',
    name:'Lukas algo'
},

{
    image : Paper,
    id: 4,
    icon : Micon,
    page: '1 of 1',
    pricetext:' Price',
    price:'2 ALGO(9.75 USD)',
    priceS:'Buy',
    Btext:'whispering while she sleeps',
    name:'Karisma.algo'

},

{
    image : Hindi,
    id: 1,
    title: 'Shela, a Hat story',
    icon : Micon,
    pricetext:' Price',
    price:'2 ALGO(9.75 USD)',
    priceA:'1,753 NFTs',
    text:'A shy smile and a thatched floppy hat. Modesty is in her aura.' ,
   
},



];

 return (
    <section id="about">
    
    <Swiper className='container about_container'
     modules={[Pagination, Navigation, Scrollbar, A11y]}
     spaceBetween={40}
     slidesPerView={4}
     pagination= {{ clickable: true}}
     >
     
     <img src={Arrowleft} alt='' className='about_arrowleft'/>
     {aboutContent.map((content,id) => {
        return(
          <SwiperSlide key ={id} className='about_item'>
            <div className='about_item_image'>
            
          
            <img src={ content.image} alt="none" className='aboutImage'/>
          
           
            </div>
            
            
            <div className='about_item_text'>
      
            <h4 className='about_title'>{content.title}</h4>
            <h6 className='about_page'>{content.page}</h6>
            <img src={ content.icon} alt="none" className='aboutIcon'/>
          
            <h5 className='about_Btext'>{content.Btext}</h5>
            <h5 className='about_name'>{content.name}</h5>
            <h5 className='about_text'>{content.text}</h5>
           
          
            
            </div>


            <div className="about_item_footer">
            
            <h4 className='about_pricetext'>{content.pricetext}</h4>
            <h4 className='about_price'>{content.price}</h4>
            <h4 className='about_priceA'>{content.priceA}</h4>
            <h4 className='about_priceS'>{content.priceS}</h4>
            
            
            </div>

          </SwiperSlide>

        );
        
     }
     )
    }
    <img src={Arrowright} alt='' className='about_arrowright'/>
    </Swiper>
  
    </section>
  )
}

export default about
