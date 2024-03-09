import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../../../Context/CartContext';
import { Link } from 'react-router-dom'

const Checkout = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const { cart, totalPrice } = useCartContext();

  console.log(cart)

  function saveOrder() {
    const orderItems = cart.map(item => ({
      title: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    const order = {
      buyer: {
        name: name,
        phone: phone,
        email: email,
      },
      items: orderItems,
    };

    const db = getFirestore();
    const ordersRef = collection(db, 'ordenes');
    addDoc(ordersRef, order)
      .then(() => {
        console.log('Orden guardada correctamente');
      })
      .catch((error) => {
        console.error('Error al guardar la orden', error);
      });
  }

  return (
    <div className='formCheckout'>
      <h1>INGRESE SUS DATOS</h1>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Link to='/ordenLista'>
        <button className='total' onClick={saveOrder}>Guardar Orden</button>
      </Link>
    </div>
  );
};

export default Checkout;
