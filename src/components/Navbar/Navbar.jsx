import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="nav-logo"><strong>ShopZone</strong></div>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/signin">Signin</Link>
        <Link to="#">🛒</Link>
      </div>
    </div>
  );
};

export default Navbar;
