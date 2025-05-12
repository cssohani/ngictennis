import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './styles/App.css'
import Home from './pages/Home'
import Coaching from './pages/Coaching'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      

    </>
  )
}

export default App
