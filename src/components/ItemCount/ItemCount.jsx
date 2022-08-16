import React, { useState, useEffect } from 'react'
import './ItemCount.css'

const ItemCount = ({initial, stock, addItem}) => {
    const [count, setCount] = useState(parseInt(initial))

    const decrease = () => {
        setCount(count - 1)
    }

    const increase = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        setCount(parseInt(initial))
    },[initial])

  return (
    <div className='counter-container'>
        <button className='counter-button' disabled={count <= 1} onClick={decrease}>-</button>
        <span>{count}</span>
        <button className='counter-button' disabled={count >= stock} onClick={increase}>+</button>
        <div className="counter-add">
            <button disabled={stock <= 0} onClick={ () => addItem(count)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default ItemCount