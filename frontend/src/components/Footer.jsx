import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="logo">
            <h1>NGIC Tennis</h1>
        </div>
        <div className="footer-contact">
            <div className="contact-title">
                <h3>Contact</h3>
            </div>
            <div className="contact-info">
                <p>111 Name Street</p>
                <p>New York City, NY</p>
                <p>(111)111-1111</p>
            </div>
        </div>
        <div className="footer-quick-links">
            <Link to="/">Home</Link>
            <Link to="/coaching">Coaching</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            
        </div>

      </div>
    </>
  )
}

export default Footer
