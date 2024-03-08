import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../../../Context/CartContext'


const Checkout = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const { cart, totalPrice } = useCartContext()


  console.log(cart);

  function saveOrder() {
    const order = {
      buyer: {
        name: name,
        phone: phone,
        email: email,
      },
      items: [
        {
          id: '3',
          title: 'teclado',
          price: '80',
        }
      ],
      total: '80'
    };
    const db = getFirestore();
    const ordenesRef = collection(db, 'ordenes');
    addDoc(ordenesRef, order)
      .then(() => {
        console.log('Order saved successfully!');
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }

  return (
    <div>

   {   cart.map(product => <p>{product.name}</p>)}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={saveOrder}>Guardar Orden</button>
    </div>
  );
};

export default Checkout;
