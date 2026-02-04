import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import Products from './component/Products';
import Contactus from './component/Contactus';
import Cart from './component/cart';
import CartDemo from './features/cart/CartDemo';

function App() {
    return (
        <>
            <Header />
            <main style={{ minHeight: '80vh' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/contactus" element={<Contactus />} />
                    <Route path="/cart" element={<Cart />} />
                    {/* Add CartDemo route if needed */}
                    <Route path="/cart-demo" element={<CartDemo />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;