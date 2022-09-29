import React from 'react'
import { Link } from 'react-router-dom'
import "./CardImage.css"
export default function CardImage({item}) {
  return (
    <Link to={`/product/${item.id}`} className='cardImage'>
        <img src={item.image[0]} alt="card"/>
    </Link>
  )
}
