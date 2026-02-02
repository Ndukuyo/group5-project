import {  Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Products from "./component/Products";
import Contactus from "./component/Contactus";
import Cart from "./component/cart";
import React from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";  


function App() {
  return (
    <>
    
      <Header /> 
      
      <main style={{ minHeight: '80vh' }}> {/* This ensures the footer stays down */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/cart" element={<Cart />} />
          

        </Routes>
      </main>

      <Footer />
      </>
    
  );
}
export default App;