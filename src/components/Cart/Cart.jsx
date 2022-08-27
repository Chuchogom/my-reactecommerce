import {addDoc, collection, getFirestore} from 'firebase/firestore';
import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart';
import './Cart.css'
import arrow from '../../assets/arrow.svg'


const Cart = () => {
  const { cart, totalPrice } = useCartContext();

    const order = {
      buyer:{
        name:'Jesus',
        email:'example@email.com',
        phone:'42423431',
        address:'shjkf'
      },
      items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
      total: totalPrice(),
    }

    const handleClick = () =>{
      const db = getFirestore();
      const orderCollection = collection(db, 'orders')
      addDoc(orderCollection, order)
      .then (({id}) => console.log(id))
    }



  if (cart.length === 0) {
    return (
      <aside className='cart-order'>
        <img className='arrow' src={arrow} alt="arrow" />
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
        <button onClick={handleClick} className='cart-button'>Buy</button>
    </div>
  )
}

export default Cart