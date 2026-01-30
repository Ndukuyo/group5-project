import React, { useState } from 'react'
import { ProductContext } from './ProductContext'

function ProductCard( {product} ) {

  // return null if product hasn't loaded yet
  if(!product) return  null;

  return (
    <>
    <div className="product-card">
        <img src={product.image} alt={product.productName} />
        <div className="card-body">
            <h3> {product.productName} </h3>
            <p> { product.productDescription} </p>
            <p>  <strong> { product.productPrice} </strong></p>

            <button>Add to Cart</button>

        </div>
    </div>
    </>
  )
}

export default ProductCard