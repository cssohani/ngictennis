import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'



const Navbar = () => {
  return (
    
    <div className="container">
        
        <div className="logo">
            <h1>NGIC Tennis</h1>
        </div>
        <nav>
            <div className="navlinks">
                <ul className="nav-links">
                    <li><Link to="/coaching">Coaching</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    </div>
    
  )
}

export default Navbar
