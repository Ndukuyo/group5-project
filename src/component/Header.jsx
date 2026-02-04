import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  return (
    
    <>
    <div className="Heading">M&S IT SOLUTIONS</div>
    
    <div className="button-row">
        {/* <div className="Heading">Electronics Store</div> */}

          <li> <button className="custom-button">Home</button></li>
          <li> <button className="custom-button">Products</button></li>
          <li> <button className="custom-button">Contact Us</button></li>
          <li><button className="custom-button">  🛒 Cart</button></li>

      </div>
      </>
  );
}

export default Header;