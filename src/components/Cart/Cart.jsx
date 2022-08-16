import {addDoc, collection, getFirestore} from 'firebase/firestore';
import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart';


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
      <button onClick={handleClick}>Buy</button>
    </>
  )
}

export default Cart