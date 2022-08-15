import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import './Item.css'

const Item = ({ info }) => {
    const name = useContext(CartContext)
    console.log('Item: ', name);

    return (
        <Link to={`/item-detail/${info.id}`} className='Item'>
            <img src={info.image} alt="" />
            <p className='product-info'> {info.title} </p>
        </Link>
    )
}

export default Item