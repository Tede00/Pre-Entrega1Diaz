import React, { useState } from 'react';

function addItem() {
  const [cartItems, setCartItems] = useState([]);

  // const addToCart = () => {
  //   if (count > 0) {
  //     setCartItems(prevCartItems => [...prevCartItems, count]);
  //     setCount(0); 
  //   }
  // };

  return (
    <div>
      <button onClick={addToCart}>Agregar al carrito</button>
      <div>
        <h3>Ítems en el carrito:</h3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>Ítem {index + 1}: {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default addItem;
