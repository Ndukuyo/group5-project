import React from 'react'
import SearchBar from '../components/SearchBar'
import ProductList from '../components/ProductList'

function Products() {
  return (
    <>
        <div className="product-only-view">
            <SearchBar />

            <div className="product-list">
                <h2> Full Catalogue </h2>
                <ProductList />
            </div>
        </div>
    </>
  )
}

export default Products