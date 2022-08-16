import React from 'react'
import { useCartContext } from '../../context/CartContext'
import './ItemCart.css'

const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
  return (
    <div className='itemCart'>
        <img src={product.image} alt={product.title} />
        <div>
            <p>Title:{product.title} </p>
            <p>Quantity: {product.quantity} </p>
            <p>Price: {product.price} </p>      
            <p>Subtotal: $ {product.quantity * product.price} </p>
            <button onClick={() => removeProduct(product.id)}>Remove</button>
        </div>
    </div>
  )
}

export default ItemCart