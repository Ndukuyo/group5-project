import React from 'react'
import SearchBar from '../components/SearchBar'
import ProductList from '../components/ProductList'

function Home() {
  return (
    <>
        <section className="hero">
            <h1> Welcome to M&S IT Solutions </h1>
            <p> Featured Products and Lattest Deals </p>
        </section>

        <SearchBar />

        <div className="product-list">
            <h2> Recomended for You </h2>
            <ProductList />
        </div>
    </>
  )
}

export default Home