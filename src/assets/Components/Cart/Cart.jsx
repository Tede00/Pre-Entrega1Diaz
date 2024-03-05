import React from 'react'
import { useCartContext } from '../../../Context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem' 

const Cart = () => {
  const { cart, totalPrice } = useCartContext()

  if (cart.length === 0) {
    return (
      <>
        <p>No hay productos en el carrito</p>
        <Link to='/'> Agregar Productos</Link>
      </>
    )
  }

  return (
    <div>
      {
        cart.map(product => <CartItem key={product.id} product={product} />)
      }
      <p>Total: ${totalPrice()} </p>
    </div>
  )
}

export default Cart
