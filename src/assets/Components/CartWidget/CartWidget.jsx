import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { useCartContext } from '../../../Context/CartContext';


const CartWidget = () => {
    const {totalProduct}= useCartContext()
  return (
    <div>
      <CiShoppingCart />
      <span>{totalProduct() || ''}</span>
    </div>
  )
}

export default CartWidget
