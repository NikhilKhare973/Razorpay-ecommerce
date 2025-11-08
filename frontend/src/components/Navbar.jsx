import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          ShopNow
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/">Products</a>
            {/* products */}
          </li>
          <li>
            <a href="/">About Us</a>
            {/* about */}
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="/" className="cart-icon">
          {/* cart */}
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">0</span>
        </a>
        <a href="/" className="user-icon">
          {/* account */}
          <i className="fas fa-user"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
