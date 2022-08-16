import React from 'react'
import './CartWidget.css'
import { useCartContext } from '../../context/CartContext'


 export const CartWidget = () => {

  const {totalProducts} = useCartContext();

  return (
    <>
      <i className="ri-shopping-cart-fill" />
      <span>{totalProducts() || ''}</span>
    </>
  )
}

export default CartWidget