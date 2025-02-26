import React from 'react';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">ShopEase</div>
      
      <div className="navbar-search">
        <input type="text" placeholder="Search products..." />
      </div>
      
      <div className="navbar-buttons">
        <button className="sign-in">Sign In</button>
        <button className="cart-button">Cart 🛒</button>
      </div>
    </nav>
  );
}
