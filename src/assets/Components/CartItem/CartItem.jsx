import React from 'react'
import { useCartContext } from '../../../Context/CartContext'

const CartItem = ({product}) => {
  const {removeItem} = useCartContext()
  return (
    <div className='itemCart'>
        <p>Titulo: {product.name} </p>
        <p>Cantidad: {product.quantity} </p>
        <p>Precio: ${product.price} </p>
        <p>Subtotal: ${product.quantity*product.price} </p>
        <button onClick={()=>removeItem(product.id)}> X </button>
    </div>
  )
}

export default CartItem
