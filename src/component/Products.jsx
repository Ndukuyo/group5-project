import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function productsButton() {
  return (
    <div className="product-button">

      <Link to="/cart">
        <button className="product-button">Add to Cart</button>
      </Link>

    </div>
  );
};

export default productsButton;
