import React from 'react'
import Cat from '../images/other3.png'
import NewIndu from '../images/Rectangle 2.png'
import Newschool from '../images/1-kid-school-monsoon-environment-photography-by-anindya-phani 1.png'
import Space from '../images/other4.png'
import Skullboi from '../images/other5.png'
import Skull from '../images/img (1).png'
import Blood from '../images/other2.png'
import Art from '../images/other1.png'
import Duck from '../images/img (2).png'
import Cow from '../images/1-kid-school-monsoon-environment-photography-by-anindya-phani 1 (2).png'
import Color from'../images/1-kid-school-monsoon-environment-photography-by-anindya-phani 1 (3).png'
import Face from'../images/1-kid-school-monsoon-environment-photography-by-anindya-phani 1 (4).png'
import Arrow from '../images/CaretCircleLeft.png'
import Micon from '../images/image 169.png'
import './profile.css'

import{Pagination, Navigation, Scrollbar, A11y} from 'swiper/modules'
import{Swiper , SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'


export const profile = () => {
 const aboutContent = [
{
 image : Cat,
 id: 1,
 title: 'Ally Cats',
 icon : Micon,
 pricetext:'Floor Price',
 price:'22 ALGO(9.75 USD)',
 priceA:'1,753 NFTs',
 text:'Atari AlphaVerse is a metaverse, part of the AlphaVerse, offering whole experience it’s ... ' 
},

{
    image : NewIndu,
    id: 2,
    title: 'Mining coins',
    icon : Micon,
    pricetext:'Floor Price',
    price:'22 ALGO(9.75 USD)',
    priceA:'1,753 NFTs',
    text:'Atari AlphaVerse is a metaverse, part of the AlphaVerse, offering whole experience it’s ... '
},

{
    
    image : Newschool,
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
    image : Space,
    id: 1,
    title: 'Solana Astronaut',
    icon : Micon,
    pricetext:'Floor Price',
    price:'22 ALGO(9.75 USD)',
    priceA:'1,753 NFTs',
    text:'Atari AlphaVerse is a metaverse, part of the AlphaVerse, offering whole experience it’s ... ' 
},
{
    image : Skullboi,
    id: 4,
    icon : Micon,
    page: '1 of 1',
    pricetext:' Price',
    price:'2 ALGO(9.75 USD)',
    priceS:'Buy',
    Btext:'#21 Skull Boi',
    name:'Karisma.algo'

},

{
    image : Skull,
    id: 4,
    icon : Micon,
    page: '1 of 1',
    pricetext:' Price',
    price:'2 ALGO(9.75 USD)',
    priceS:'Buy',
    Btext:'#415 Near Normad',
    name:'Lukas.algo'

},

{
    image : Blood,
    id: 4,
    icon : Micon,
    page: '1 of 1',
    pricetext:' Price',
    price:'2 ALGO(9.75 USD)',
    priceS:'Buy',
    Btext:'#21 Bloody face',
    name:'Lukas.algo'

},

{
    image : Art,
    id: 4,
    icon : Micon,
    page: '1 of 1',
    pricetext:' Price',
    price:'2 ALGO(9.75 USD)',
    priceS:'Buy',
    Btext:'Genery Wall',
    name:'Karisma.algo'

},

{
    image : Duck,
    id: 4,
    icon : Micon,
    page: '1 of 1',
    pricetext:' Price',
    price:'2 ALGO(9.75 USD)',
    priceS:'Buy',
    Btext:'#21 Platty NFT Shuffle',
    name:'Lukas.algo'

},

{
    image : Cow,
    id: 4,
    icon : Micon,
    page: '1 of 1',
    pricetext:' Price',
    price:'2 ALGO(9.75 USD)',
    priceS:'Buy',
    Btext:'Urban Life',
    name:'Lukas.algo'

},

{
    image : Color,
    id: 4,
    icon : Micon,
    page: '1 of 1',
    pricetext:' Price',
    price:'2 ALGO(9.75 USD)',
    priceS:'Buy',
    Btext:'My Tools',
    name:'Lukas.algo'

},

{
    image : Face,
    id: 4,
    icon : Micon,
    page: '1 of 1',
    pricetext:' Price',
    price:'2 ALGO(9.75 USD)',
    priceS:'Buy',
    Btext:'Through the pains',
    name:'Lukas.algo'

},





];

 return (
    <section id="about">
    
    
    <div className='container about_container'>
   

     {aboutContent.map((content,id) => {
        return(
          <article key ={id} className='about_item'>
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

          </article>

        );
        
     }
     )
    }
    </div>
    </section>
  )
}

export default profile
