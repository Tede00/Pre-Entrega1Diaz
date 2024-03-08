import React from 'react'
import { useCartContext } from '../../../Context/CartContext'

const CartItem = ({product}) => {
  const {removeItem} = useCartContext()
  return (
    <div className='itemCart'>
        <img className="imgCart" src={product.img} alt="producto" />
        <p> {product.name} </p>
        <p>Cantidad<br/>{product.quantity} </p>
        <p>Precio <br/>${product.price} </p>
        <p>Subtotal <br/>${product.quantity*product.price} </p>
        <button className='buttonCount' onClick={()=>removeItem(product.id)}> X </button>
    </div>
  )
}

export default CartItem
