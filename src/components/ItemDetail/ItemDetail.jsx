import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import './ItemDetail.css'

export const ItemDetail = ({ data }) => {


    const [cartView, setCartView] = useState(false)
    const {addProduct} = useCartContext();

    const addItem = (quantity) => {
        setCartView(true)
        addProduct(data, quantity);
      }

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
                        {
                            cartView
                            ? <Link to='/cart' > Go to Cart </Link>
                            :<ItemCount initial={1} stock={5} addItem={addItem} />
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail