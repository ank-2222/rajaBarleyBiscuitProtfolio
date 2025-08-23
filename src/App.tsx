import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={< About/>} />
      <Route path="/products" element={<Product />} />
    </Routes>
    
    </>
  )
}

export default App
