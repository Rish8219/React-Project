import React from 'react';
import "./Navbar.css"
import logo from "./.././../assets/logo.png"
import cart_icon from "./.././../assets/cart_icon.png"
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={logo} alt="logo"/>
                <p>Shopper</p>
            </div>
            <ul className='nav-menu'>
                <li>Shop</li>
                <li>Men</li>
                <li>Woman</li>
                <li>Kids</li>
            </ul>
            <div className='nav-login-cart'>
                <button className='login'>Login</button>
                <img src={cart_icon} alt="cart-logo" />
            </div>
         
        </div>
    );
}

export default Navbar;
