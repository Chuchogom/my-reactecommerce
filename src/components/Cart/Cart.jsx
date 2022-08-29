import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link, NavLink } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart';
import './Cart.css'
import arrow from '../../assets/arrow.svg'


const Cart = () => {
  const { cart, totalPrice } = useCartContext();


    const [toggleCart, setToggleCart] = useState(false)

  if (cart.length === 0) {
    return (
      <aside className='cart-order'>
        <img className='arrow' src={arrow} alt="arrow" onClick={() => setToggleCart.remove (toggleCart)}/>
        <h3 className='title-cart'>My Cart</h3>
        <div className="empty-order">
          <p>Empty car</p>
          <Link to='/' className='link'>Don't wait, choose a good product</Link>
        </div>
      </aside>
    );
  }

  return (
    <div className='cart-order'>
      <img className='arrow' src={arrow} alt="arrow" />
      <h3 className='title-cart'>My Cart</h3>
      {
        cart.map(product =>
          <ItemCart key={product.id}
            product={product} />)
      }
        <div className="total-order">
          <p>Total:</p>
          <p>$ {(totalPrice()).toFixed(2)}</p>
        </div>
        <NavLink to='/checkout'>
          <button className='cart-button'>Checkout</button>
        </NavLink>
    </div>
  )
}

export default Cart