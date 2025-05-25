import React, { useState, useEffect } from 'react'
import { CartState } from '../context/Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '../styles/Cart.css'

const Cart = () => {
  const { state: { cart }, dispatch} = CartState();
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    setSubTotal(cart.reduce((acc, curr) => acc + Number(curr.price)*curr.qty, 0))
  }, [cart])

  const tax = subTotal*0.11
  const total = subTotal + tax
  return (
    <div className="cart-container">
      <h1>My Cart</h1>
      <div className="cart-bg">
        
        <div className="cart-items">
          {cart.map((item) => (
            <div className="item">
              <div className="item-img">
                <img src={`/images/${item.img}`} />
              </div>
              <div className="item-details">
                <span>{item.name}</span>
                <span>${item.price}</span>
                <button onClick={() => dispatch({type: "REMOVE_FROM_CART", payload: item})}><FontAwesomeIcon icon={faTrash} /></button>
                
              </div>
              
            </div>
          ))}
        </div>
        <div className="cost-section">
          <h3>Order Summary</h3>
          <div className="price-info">
            
            <p>Subtotal <span>${subTotal}</span></p>
            <p>Tax <span>${tax.toFixed(2)}</span></p>
            <p style={{fontWeight: "bold"}}>Total <span>${total.toFixed(2)}</span></p>
          </div>
          <div className="checkout-button"><button>Checkout</button></div>
        </div>
        
      </div>

      
    </div>
  )
}

export default Cart
