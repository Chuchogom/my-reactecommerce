import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ info }) => {
    

    return (
        <Link to={`/item-detail/${info.id}`} className='Item'>
            <img src={info.image} alt="" />
            <p className='product-info'> {info.title} </p>
        </Link>
    )
}

export default Item