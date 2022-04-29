import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductAdd from './components/products/ProductAdd';
import ProductList from './components/products/ProductList'
import Footer from './components/layout/Footer'

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route exact path="/product-add" element={<ProductAdd />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
