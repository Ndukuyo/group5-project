import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

import React, { useState, useEffect } from 'react';

const handleSubmit = (e) => {
  e.preventDefault();

  // 1. Fetch all users from your json-server
  fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((usersArray) => {
      
      // 2. Compare user input (formData) with the database (usersArray)
      const authenticatedUser = usersArray.find(
        (user) => 
          user.username === formData.username && 
          user.password === formData.password
      );

      // 3. Handle the result
      if (authenticatedUser) {
        console.log("Login Success:", authenticatedUser);
        // Requirement: Update App state and navigate
        onLogin(authenticatedUser); 
        navigate("/dashboard");
      } else {
        alert("Invalid username or password!");
      }
    })
    .catch((err) => console.error("Database connection error:", err));
};


const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
           <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' required />
                <FaLock className='icon '/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password?</a>
            </div>
            <button type="submit" onClick={handleSubmit}>Login</button>
            <div className="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>
        </form>
    </div>
  )
}

export default LoginForm