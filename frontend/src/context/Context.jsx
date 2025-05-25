import React, { createContext, useContext, useReducer, useState } from 'react'
import { cartReducer } from './Reducers';
import axios from 'axios'

const Cart = createContext();
const Context = ({ children }) => {
    const [products, setProducts] = useState([]);
    

  const [state, dispatch] = useReducer(cartReducer, {
        cart: []
    })

  const getProducts = async () => {
    const response = await axios.get("http://localhost:8080/products");
    setProducts(response.data || null);
    
  }

  useState(() => {
    getProducts();
  }, [])




  return (
    <Cart.Provider value={{products, state, dispatch}}>
        { children }
    </Cart.Provider>
  )
}

export default Context

export const CartState = () => {
    return useContext(Cart)
}
