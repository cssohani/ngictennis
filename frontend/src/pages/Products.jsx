import React from 'react'
import '../styles/Products.css'

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
  return (
    <>
      <div className="products-container">
        <div className="bg-section">
          <h2 style={{marginBottom: "20px"}}>Products</h2>
          <div className="product-section">
            {productItems.map((product, index) => (
              <div key={index} className="product-item">
                <a key={product.id} className="group">
                  <img
                    src={`/images/${product.imgSrc}`}
                  />
                  <h3>{product.price}</h3>
                  <p>{product.name}</p>
              </a>
              </div>
            ))}
          </div>
        </div>
      
      </div>

    
    
    </>
  )
}

export default Products
