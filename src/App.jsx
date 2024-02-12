import './App.css'
import NavBar from './assets/Components/NavBar/NavBar'
import ItemListContainer from './assets/Components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
 