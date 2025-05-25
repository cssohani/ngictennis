import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    
    <div className="container">
        
        <div className="logo">
            <h1><Link to="/">NGIC Tennis</Link></h1>


        </div>
        <nav>
            <div className="navlinks">
                <ul className="nav-links">
                    <li><Link to="/coaching">Coaching</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
                    
                </ul>
            </div>
        </nav>
    </div>
    
  )
}

export default Navbar
