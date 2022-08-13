import React from 'react'
import './Item.css'

const Item = ({ info }) => {
    return (
        <a href="" className='Item'>
            <img src={info.image} alt="" />
            <p className='product-info'> {info.title} </p>
        </a>
    )
}

export default Item