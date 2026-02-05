import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Header.css'; 

function Header() {
  return (
    
    <>
    <div className="Heading">M&S IT SOLUTIONS</div>
    
    <div className="button-row">
        {/* <div className="Heading">Electronics Store</div> */}

          <li> <button className="custom-button"> <NavLink to="/" end> Home </NavLink> </button> </li>
          <li> <button className="custom-button"> <NavLink to="/Products" > Products </NavLink> </button> </li>
          <li> <button className="custom-button"> <NavLink to="/ContactUs" > Contact Us </NavLink> </button> </li>
          <li><button className="custom-button"> <NavLink to="/Cart">🛒 Cart</NavLink> </button></li>

      </div>
      {/* <div className="navBar">
                  <ul className='navLinks'>
                      <li> 
                          <NavLink to="/" end> Home </NavLink> 
                      </li>
                      <li> 
                          <NavLink to="/Products" > Products </NavLink>
                      </li>
                      <li> 
                          <NavLink to="/ContactUs" > Contact Us </NavLink> 
                      </li>
                      <li>
                          <NavLink>
                              <FaShoppingCart /> 
                          </NavLink> 
                          
                      </li>
                  </ul>
              </div> */}
      </>
  );
}

export default Header;