import React from 'react';
import { Link } from 'react-router-dom';
import footer_logo from "../../assets/logo_big.png"
import insta_icon from "../../assets/instagram_icon.png"
import pin_icon from "../../assets/pintester_icon.png"
import whatsapp_icon from "../../assets/whatsapp_icon.png"

const Footer = () => {
    return (
<div className='footer bg-gray-100 mt-10 py-10'>
    <div className="container mx-auto flex flex-col items-center text-center gap-10">
        
        {/* Footer Logo */}
        <div className="footer-logo flex items-center gap-5">
            <img src={footer_logo} alt="Shopper Logo" className="w-12 h-12" />
            <p className='text-[#383838] text-2xl font-bold'>SHOPPER</p>
        </div>

        {/* Footer Links */}
        <ul className="footer-links grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-10 text-[#252525] text-lg">
            <li>
                <Link to="/" className='hover:text-orange-500 transition duration-300'>Company</Link>
            </li>
            <li>
                <Link to="/" className='hover:text-orange-500 transition duration-300'>Products</Link>
            </li>
            <li>
                <Link to="/" className='hover:text-orange-500 transition duration-300'>Offices</Link>
            </li>
            <li>
                <Link to="/" className='hover:text-orange-500 transition duration-300'>About</Link>
            </li>
            <li>
                <Link to="/" className='hover:text-orange-500 transition duration-300'>Contact</Link>
            </li>
        </ul>

        {/* Social Icons */}
        <div className="footer-social-icons flex gap-5">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-icons-container p-3 bg-white shadow-md rounded-lg hover:bg-gray-200 transition duration-300">
                <img src={insta_icon} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="footer-icons-container p-3 bg-white shadow-md rounded-lg hover:bg-gray-200 transition duration-300">
                <img src={pin_icon} alt="Pinterest" className="w-6 h-6" />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="footer-icons-container p-3 bg-white shadow-md rounded-lg hover:bg-gray-200 transition duration-300">
                <img src={whatsapp_icon} alt="WhatsApp" className="w-6 h-6" />
            </a>
        </div>

        {/* Footer Copyright */}
        <div className="footer-copyright w-full text-center text-[#1a1a1a] text-lg">
            <hr className='w-40 mx-auto bg-[#252525] rounded-2xl h-1' />
            <p className='mt-5'>© 2020 Shopper. All rights reserved.</p>
        </div>
    </div>
</div>
    );
}

export default Footer;
