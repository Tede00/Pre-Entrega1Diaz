import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export function CartProvider({ children }) {

  const [cart,setCart]=useState([]);

  function addItem(producto){
    setCart([...cart,producto]);
  }

  function removeItem(producto){
    setCart(cart.filter(item=>item.id!==producto.id));
  }

  return (
    <CartContext.Provider value={{cart, addItem, removeItem}}>
      {children}
    </CartContext.Provider>
  );
}
