import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Title from '../Title/Title'

const ItemListContainer = ({props}) => {

const addItem = (quantity) => {
  console.log(`You bought ${quantity} units`);
}

  return (
    <>
      <Title  greeting={'Alien Shop'}/>
      <ItemCount initial={1} stock={7} addItem={addItem} />
    </>
  )
}

export default ItemListContainer