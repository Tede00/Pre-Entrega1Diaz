import { useState } from 'react'
import './App.css'
import Product from './Product'
import Contador from './Contador'
import NavBar from './assets/Components/NavBar/NavBar'
import ItemListContainer from './assets/Components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
    <div className='container'>
      <NavBar/>
      <ItemListContainer greeting='Bienvenidos al E-Commerce'/>
      <Product 
          img='https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/m171/gallery/m171-mouse-top-view-grey.png?v=1' 
          title='Mouse' 
          price={9300} 
        />
        <Contador/>

        <Product 
          img='https://c0.klipartz.com/pngpicture/47/234/gratis-png-teclado-del-ordenador-teclado-del-conmutador-teclado-numerico-usb-teclado.png' 
          title='Teclado' 
          price={8000}
        />
        <Contador/>

        <Product 
          img='https://e7.pngegg.com/pngimages/306/125/png-clipart-headphones-headphones.png' 
          title='Auricular' 
          price={13400}
        />
        <Contador/>
    </div>
    </>
  )
}

export default App
 