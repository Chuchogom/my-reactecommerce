import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ data }) => {
  return (
    <div className="detail-container">
        <div className="detail-card">
            <img className='detail-image' src={data.image} alt="" />
            <div className="detail-description">
                <h1> {data.title} </h1>
                <p>{data.description}</p>
                <div className="detail-buy">
                    <div className="detail-price">
                        <span> $ {data.price} </span>
                    </div>
                    <div className="detail-btn">
                        <ItemCount/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail