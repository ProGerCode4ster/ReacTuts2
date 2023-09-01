import React  from 'react'
import Hindi from '../images/Hindi.png'
import Industry from '../images/Rectangle 2.png'
import Paper from '../images/1-kid-school-monsoon-environment-photography-by-anindya-phani 1 (1).png'
import School from '../images/1-kid-school-monsoon-environment-photography-by-anindya-phani 1.png'
import Arrowleft from '../images/Group 1410066285.png'
import Arrowright from '../images/CaretCircleLeft.png'
import Micon from '../images/image 169.png'
import { Carousel } from 'react-responsive-carousel';
import { useRef } from 'react'
import './about.css'

import{Pagination, Navigation, Scrollbar, A11y,Virtual,Controller} from 'swiper/modules'
import{Swiper , SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import { useState } from 'react'


export const About = () => {
  
 

 const aboutContent = [
{
 image : Hindi,
 id: 1,
 title: 'Shela, a Hat story',
 icon : Micon,
 pricetext:'Floor Price',
 topimage:null,
 price:'22 ALGO(9.75 USD)',
 priceA:'1,753 NFTs',
 priceS:null,
 text:'A shy smile and a thatched floppy hat. Modesty is in her aura.' 
},

{
    image : Industry,
    id: 2,
    title: 'Mining coins',
    icon : Micon,
    pricetext:'Floor Price',
    topimage:null,
    price:'22 ALGO(9.75 USD)',
    priceA:'1,753 NFTs',
    priceS:null,
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
    priceA:null,
    Btext:'Building Of the future',
    topimage:"Architecture",
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
    priceA:null,
    Btext:'whispering while she sleeps',
    topimage:"Drawing",
    name:'Karisma.algo'

},

{
    image : Hindi,
    id: 1,
    title: 'Shela, a Hat story',
    icon : Micon,
    pricetext:' Price',
    price:'2 ALGO(9.75 USD)',
    topimage:null,
    priceA:'1,753 NFTs',
    priceS:null,
    text:'A shy smile and a thatched floppy hat. Modesty is in her aura.' ,
   
},

{
  image : Industry,
  id: 2,
  title: 'Mining coins',
  icon : Micon,
  pricetext:'Floor Price',
  price:'22 ALGO(9.75 USD)',
  priceS:null,
  priceA:'1,753 NFTs',
  topimage:null,
  text:'Atari AlphaVerse is a metaverse, part of the AlphaVerse, offering whole experience it’s ... '
},




];


const [slide, setSlide] = useState(0);

const nextSlide = () => {
  setSlide( slide === aboutContent.length-1? 0: slide +1)
}

const prevSlide = () => {
  setSlide( slide === 0 ? aboutContent.length- 1: slide-1)
}







 return (
    <section id="about">
    
    <Swiper className='container about_container'
     modules={[Pagination, Navigation, Scrollbar, A11y,Virtual]}
     spaceBetween={30}
     slidesPerView={4}
     pagination= {{ clickable: true}}
     virtual ={true}
     navigation={{
      nextEl:".about_arrowright",
       prevEl:".about_arrowleft",
     }}
     >
     
     <img src={Arrowleft} alt='' className='arrow about_arrowleft' onClick={prevSlide}/>
     {aboutContent.map((content,id) => {
        return(
          <SwiperSlide key ={id} className='about_item'>
            <div className='about_item_image'>
            
            <h4 className={content.topimage ===null ? "price_hidden" : "profile_topImage"}>{content.topimage}</h4>
            <img src={ content.image} alt="none" key={id} className={slide  === id ? "aboutImage" : "aboutImage aboutImage-hidden"}/>
          
           
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
            <h4 className={content.priceA ===null ? "price_hidden" : "about_priceA"}>{content.priceA}</h4>
            <h4 className={content.priceS ===null ? "price_hidden" : "about_priceS"}>{content.priceS}</h4>
            
            
            </div>

          </SwiperSlide>
        
        );
     
        
     }
     )
    }
    <img src={Arrowright} alt='' className=' arrow about_arrowright' onClick={nextSlide}/>
    </Swiper>
  
    </section>
  )
}

export default About
