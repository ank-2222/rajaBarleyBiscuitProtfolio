import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Certificate from './pages/Certificate'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={< About/>} />
      <Route path="/products" element={<Product />} />
      <Route path='/certificate' element={<Certificate/>} />
    </Routes>
    
    </>
  )
}

export default App
