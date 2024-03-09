import React from 'react'
import { useCartContext } from '../../../Context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem' 
import Checkout from '../Checkout/Checkout'

const Cart = () => {
  const { cart, totalPrice } = useCartContext()

  if (cart.length === 0) {
    return (
      <>
        <p>No hay productos en el carrito</p>
        <Link to='/' className='buttonCount'> Agregar Productos</Link>
      </>
    )
  }
  return (
    <div className='cartContainer'>
      {
        cart.map(product => <CartItem key={product.id} product={product} />)
      }
      <div>
        <p className='total'>Total <br/>${totalPrice().toFixed(2)} </p>
        <Link to= '/checkout'>
          <button className='buttonCount'>Generar Orden</button>
        </Link>
      </div>
    </div>
  )
}

export default Cart
