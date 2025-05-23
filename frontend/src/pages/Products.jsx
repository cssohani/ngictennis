import {useState, useEffect } from 'react'
import '../styles/Products.css'
import axios from 'axios'

const productItems = [
  {
    id: 1,
    name: "Wilson Racket",
    price: "$289",
    imgSrc: "tennis-racket.jpg",

  },
  {
    id: 2,
    name: "Wilson Racket",
    price: "$289",
    imgSrc: "tennis-racket.jpg",

  },
  {
    id: 3,
    name: "Wilson Racket",
    price: "$289",
    imgSrc: "tennis-racket.jpg",

  },
  {
    id: 4,
    name: "Wilson Racket",
    price: "$289",
    imgSrc: "tennis-racket.jpg",

  },
  {
    id: 5,
    name: "Wilson Racket",
    price: "$289",
    imgSrc: "tennis-racket.jpg",

  }
]
const Products = () => {
  const [products, setProducts] = useState([])
  const getProducts = async () => {
    const response = await axios.get("http://localhost:8080/products");
    console.log(response);
    setProducts(response.data || null);
  }
  

  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);

  return (
    <>
      <div className="products-container">
        <div className="bg-section">
          <h2 style={{marginBottom: "20px"}}>Products</h2>
          <div className="product-section">
            {productItems.map((product, index) => (
              <div key={index} className="product-item">
                <div key={product.id} className="group">
                  <img
                    src={`/images/${product.imgSrc}`}
                  />
                  <h3>{product.price}</h3>
                  <p>{product.name}</p>
                  <button>Add to Cart</button>
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
