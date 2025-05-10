import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './styles/App.css'
import Home from './pages/Home'
import Coaching from './pages/Coaching'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes path="/" element={<Home />} />
      <Routes path="/coaching" element={<Coaching />} />
      <Routes path="/products" element={<Products />} />
      <Routes path="/about" element={<About />} />
      <Routes path="/contact" element={<Contact />} />
    </>
  )
}

export default App
