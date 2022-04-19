import './App.css'
import './components/ProductAdd'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductAdd from './components/ProductAdd';
import ProductList from './components/ProductList'
import Footer from './components/Footer'

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
