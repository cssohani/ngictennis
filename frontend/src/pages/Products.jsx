import {useState, useEffect } from 'react'
import '../styles/Products.css'
import axios from 'axios'
import { CartState } from '../context/Context'



const Products = () => {

  const { state: { cart }, dispatch } = CartState();
  const [products, setProducts] = useState([])
  const getProducts = async () => {
    const response = await axios.get("http://localhost:8080/products");
    console.log(response);
    setProducts(response.data || null);
  }
  

  useEffect(() => {
    getProducts();
  }, []);
  //console.log(cart);

  return (
    <>
      <div className="products-container">
        <div className="bg-section">
          <h2 style={{marginBottom: "20px"}}>Products</h2>
          <div className="product-section">
            {products.map((product, index) => (
              <div key={index} className="product-item">
                <div key={product.id} className="group">
                  <img
                    src={`/images/${product.img}`}
                  />
                  <h3>${product.price}</h3>
                  <p>{product.name}</p>
                  <button onClick={() => dispatch({type: "ADD_TO_CART", payload: product})}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      
      </div>

    
    
    </>
  )
}

export default Products
