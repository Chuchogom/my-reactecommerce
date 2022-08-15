import React, { useState } from 'react'
export const CartContext = React.createContext([]);
console.log(`CartContext: `, CartContext)

const CartProvider = ( {children} ) => {
    const [cart, setCart] = useState([])



    const cleanCart = () => setCart([])
    
    const itemInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeCart = (id) => setCart(cart.filter(product => product.id !== id))


  return (
    <CartContext.Provider value=[{
        cleanCart, 
        itemInCart,
        removeCart
    }]>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider