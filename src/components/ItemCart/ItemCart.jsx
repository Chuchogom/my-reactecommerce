import React from 'react'
import { useCartContext } from '../../context/CartContext'
import './ItemCart.css'


const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
  return (
    <div className='cart-order'>
      <div className="cart-item">
        <img src={product.image} alt={product.title}/>
            <p>{product.title} </p>
            <p>{product.quantity} </p>
            <p>Price: {product.price} </p>      
            <p>Subtotal: $ {product.quantity * product.price} </p>
            <span onClick={() => removeProduct(product.id)}>X</span>
      </div>
    </div>
  )
}

export default ItemCart