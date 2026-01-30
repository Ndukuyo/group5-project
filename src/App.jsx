import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar'
import ProductList from './components/ProductList'
import  { ProductCardProvider } from './components/ProductContext'

function App() {

  
  return (
    <ProductCardProvider>
      <SearchBar />

      <div className="product-list">
        <h2>Our Products</h2>
        <ProductList />
      </div>
     
    </ProductCardProvider>
  )
}

export default App
