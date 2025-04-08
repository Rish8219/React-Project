import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./.././../assets/logo.png";
import cart_icon from "./.././../assets/cart_icon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar flex justify-between items-center p-5 bg-white shadow-md">
      {/* Logo */}
      <div className="nav-logo flex items-center">
        <img src={logo} alt="logo" className="h-10" />
        <p className="text-2xl font-bold ml-2">Shopper</p>
      </div>

      {/* Toggle Button */}
      <button className="menu-toggle md:hidden p-2 bg-gray-800 z-30 text-white rounded" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Navigation Links */}
      <ul className={`nav-menu md:flex gap-6 text-lg ${menuOpen ? "block" : "hidden"} absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 p-5 md:p-0 md:flex-row flex flex-col`}>
        <li><NavLink to="/" className="hover:border-b-2 border-red-500">Shop</NavLink></li>
        <li><NavLink to="/products" className="hover:text-plum">Men</NavLink></li>
        <li><NavLink to="/shopcategories" className="hover:border-b-2 border-red-500">Women</NavLink></li>
      </ul>

      {/* Login & Cart */}
      <div className="nav-login-cart hidden md:flex items-center gap-6">
        <button className="login bg-amber-500 px-4 py-2 rounded-xl">Login</button>
        <img src={cart_icon} alt="cart-logo" className="h-8" />
      </div>
    </nav>
  );
};

export default Navbar;