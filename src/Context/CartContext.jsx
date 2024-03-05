import React, { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
  cantidadTotal: 0
});

export const CartProvider = ({ children }) =>{

  const [cart,setCart]=useState([]);
  const [total,setTotal]=useState(0);
  const [cantidadTotal,setCantidadTotal]=useState(0);

  const addItem=(item) => {
  
  }

  const removeItem=(producto)=>{
    setCart(cart.filter(item=>item.id!==producto.id));
  }


  const clearCart=() =>setCart([])
  // const isInCart()


  return (
    <CartContext.Provider value={{cart, addItem, removeItem, clearCart, isInCart}}>
      {children}
    </CartContext.Provider>
  );
}
