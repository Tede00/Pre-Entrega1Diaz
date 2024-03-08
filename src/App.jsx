import './App.css'
import NavBar from './assets/Components/NavBar/NavBar'
import ItemListContainer from './assets/Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './assets/Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './assets/Components/Cart/Cart.jsx';
import {CartProvider} from './Context/CartContext.jsx';
import Checkout from './assets/Components/Checkout/Checkout';

function App() {

  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/product/:id" element={<ItemDetailContainer />} />
              <Route path='/cart' element= { <Cart/>} />
              <Route path='/checkout/:product' element= { <Checkout/>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
} 

export default App