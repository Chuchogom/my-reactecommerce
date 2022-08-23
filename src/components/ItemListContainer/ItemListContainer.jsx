import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import Title from '../Title/Title'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'



export const ItemListContainer = ({props}) => {

  const [data, setData] = useState([]);
  const {categoryId} = useParams();

  useEffect(() => {
   
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'products');
    if (categoryId) {
      const queryFilter = query ( queryCollection, where('category', '==', categoryId))
      getDocs(queryFilter)
        .then(res => setData(res.docs.map (product => ({id: product.id, ...product.data()}))))
    } else{
      getDocs(queryCollection)
        .then(res => setData(res.docs.map (product => ({id: product.id, ...product.data()}))))
    }

  }, [categoryId])
  

  return (
    <>
      <div className="Item-list_container">
        <Title  greeting={'Alien Shop'}/>
        <ItemList data = {data} />
      </div>
    </>
  )
}

export default ItemListContainer