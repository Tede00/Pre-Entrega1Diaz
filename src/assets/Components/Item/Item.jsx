import React from 'react'

const Item = ({product}) => {
  return (
    <div className='card'>
        <h3>{product.product}</h3>
        <h2>${product.price}</h2>
    </div>
  )
}

export default Item