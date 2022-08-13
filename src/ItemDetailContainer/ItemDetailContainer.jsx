import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const product = {
    id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price: 109.95, description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", category: "men's clothing", image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
}

const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    useEffect(() => {
      const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(product)
        }, 2000);
      });

      getData.then(res => setData(res))    
    }, [])
    

  return (
    <ItemDetail data = {data} />
  )
}

export default ItemDetailContainer