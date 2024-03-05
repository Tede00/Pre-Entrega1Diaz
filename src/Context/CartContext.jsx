import React, { createContext, useState, useContext} from "react";

export const useCartContext = () => useContext(CartContext)

export const CartContext = createContext({
  cart: [],
  total: 0,
  cantidadTotal: 0
});

export const CartProvider = ({ children }) =>{
  const [cart,setCart]=useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map(product => {
        return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product;
      }));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  }

      console.log('Carrito: ', cart)

  const removeItem=(product)=>{
    setCart(cart.filter(item=>item.id!==product));
  }

  const clearCart=() =>setCart([])

  const isInCart = (id)=> {
    return cart.find(product =>product.id===id)? true:false
  }

  const totalPrice =  () => {
    return cart.reduce((prev, act ) => prev + act.quantity * act.price, 0)
  }
  
  const totalProduct = () => {
    return cart.reduce((acum , prodActual ) => acum + prodActual.quantity, 0)
  }
 
  return (
    <CartContext.Provider value={{
      cart, 
      addItem, 
      removeItem, 
      clearCart, 
      isInCart,
      totalPrice,
      totalProduct,
      cart,
      }}>
      {children}
    </CartContext.Provider>
  );
}
