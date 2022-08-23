import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ info }) => {
    

    return (
        <Link to={`/item-detail/${info.id}`} className='Item'>
            <div className="Item-container animate__animated animate__backInDown" >
                <img src={info.image} alt="" />
                <h3 className='Item-title'> {info.title} </h3>
            </div>
        </Link>
    )
}

export default Item