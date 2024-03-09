import React from 'react'
import { useCartContext } from '../../../Context/CartContext'

const CartItem = ({product}) => {
  const {removeItem} = useCartContext()
  const subtotal = product.quantity*product.price
  const subtotalFixed = subtotal.toFixed(2)

  return (
    <div className='itemCart'>
        <img className="imgCart" src={product.img} alt="producto" />
        <p> {product.name} </p>
        <p>Cantidad<br/>{product.quantity} </p>
        <p>Precio <br/>${product.price} </p>
        <p>Subtotal <br/>${subtotalFixed} </p>
        <button className='buttonCount' onClick={()=>removeItem(product.id)}> X </button>
    </div>
  )
}

export default CartItem
