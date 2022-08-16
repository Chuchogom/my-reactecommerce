import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart';


const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>Empty car</p>
        <Link to='/'>Don't wait, choose a good product</Link>
      </>
    );
  }

  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p>
        Total: {totalPrice()}
      </p>
    </>
  )
}

export default Cart