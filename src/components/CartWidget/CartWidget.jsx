import React from 'react'
import './CartWidget.css'
import { useCartContext } from '../../context/CartContext'
import shoppingCart from '../../assets/shoppingCart.svg'


 export const CartWidget = () => {

  const {totalProducts} = useCartContext();

  return (
    <>
      <img src={shoppingCart} alt="" />
      <span>{totalProducts() || ''}</span>
    </>
  )
}

export default CartWidget