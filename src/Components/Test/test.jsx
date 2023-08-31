import React from 'react'
import './test.css'

export const test = ({data}) => {
  return (
    <div>{data.map((content,id) =>{
   return <img src={content.image} alt="none" key ={id}/>

    })}</div>
  )
  
}
