import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

function Header() {
  return (
    <>
        <div className="navBar">
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
        </div>
    </>
  )
}

export default Header