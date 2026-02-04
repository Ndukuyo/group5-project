import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar'
import ProductList from './components/ProductList'
import  { ProductCardProvider } from './components/ProductContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { FaShoppingCart } from 'react-icons/fa'

import Home from './Pages/Home'
import Products from './Pages/Products'
import ContactUS from './Pages/ContactUS'

function App() {

  
  return (
    <BrowserRouter> 
      <ProductCardProvider>
        <div className="app-cotainer">
            <Header />

              <div className="content">
                     <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/' element={<Products />} />
                <Route path='/' element={<ContactUS />} />
                {/* <Route path="/" element={<FaShoppingCart />} /> */}
              </Routes>
           {/* <SearchBar /> */}

             <div className="product-list">
              <h2>Our Products</h2>
              <ProductList />
            </div>
            
              </div>
         

            <Footer />
        </div>
      
    
      </ProductCardProvider>
    </BrowserRouter>
  )
}

export default App
