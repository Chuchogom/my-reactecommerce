import React, { useState, useEffect } from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'





const ItemDetailContainer = () => {

  const [data, setData] = useState([]);
  const {detailId} = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'products', '9zG4pmDWHDv9sqQk5LGC')
    getDoc(queryDoc)
      .then(res => console.log(res.id, res.data()))
  }, [])


  return (
    <ItemDetail data={data} />
  )
}

export default ItemDetailContainer