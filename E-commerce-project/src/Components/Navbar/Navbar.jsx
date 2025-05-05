import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "./.././../assets/logo.png";
import cart_icon from "./.././../assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { num, user, logoutUser } = useContext(ShopContext);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  if (user && user.role === "admin") {

    return (
      <nav className="navbar fixed w-full z-10 flex justify-between items-center bg-transparent px-5 backdrop-blur-lg shadow-md py-4">
        <NavLink to="/admin">
          <div className="nav-logo flex items-center cursor-pointer">
            <img src={logo} className="w-10" alt="logo" />
            <p className="text-2xl font-bold ml-2 text-black hover:text-orange-600">Shopper</p>
          </div>
        </NavLink>
        <div className="relative">
          <button onClick={() => setProfileOpen(!profileOpen)} className="login bg-[#ff5a5a] hover:bg-orange-700 text-white px-4 py-2 cursor-pointer rounded-sm">
            {user.name}
          </button>
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-auto bg-white border rounded-md shadow-lg z-50">
              <div className="p-4 border-b">
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              {user.role !== "admin" && (
                <NavLink to="/profile" className="block px-4 py-2 hover:bg-gray-100">My Profile</NavLink>
              )}
              <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
            </div>
          )}
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar fixed w-full z-10 flex min-[100px]:max-[370px]:py-4  justify-between items-center bg-transparent px-5 backdrop-blur-lg  shadow-md">

      <NavLink to="/">
        <div className=" max-md:ml-5 nav-logo max-[370px]:w-10 flex items-center">
          <img src={logo} className="cursor-pointer max-[370px]:w-5" alt="logo" />
          <p className=" cursor-pointer inline text-2xl hover:text-orange-500 max-[370px]:text-xl font-bold ml-2">Shopper</p>
        </div>
      </NavLink>

      <button className="menu-toggle md:hidden max-[768px]:absolute max-[740px]:ml-0 z-30 text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "❌" : "☰"}
      </button>


      <ul className={`nav-menu md:flex gap-6 text-lg ${menuOpen ? "block" : "hidden"} absolute md:static max-[370px]:top-10  max-md:bg-gradient-to-r from-white to-gray-500  text-center md:bg-transparent w-full md:w-auto left-0 top-15 p-5 md:p-0 md:flex-row flex flex-col`}>
        <li><NavLink to="/" style={({ isActive }) => isActive ? { borderBottom: "2px solid red", } : {}} className="hover:border-b-2 border-red-500">Shop</NavLink></li>
        <li><NavLink to="/men" style={({ isActive }) => isActive ? { borderBottom: "2px solid red", } : {}} className="hover:border-b-2 border-[#ff5a5a]">Men</NavLink></li>
        <li><NavLink to="/women" style={({ isActive }) => isActive ? { borderBottom: "2px solid red", } : {}} className="hover:border-b-2 border-red-500">Women</NavLink></li>
        <li><NavLink to="/kid" style={({ isActive }) => isActive ? { borderBottom: "2px solid red", } : {}} className="hover:border-b-2 border-red-500">Kid</NavLink></li>
      </ul>

      <div className="nav-login-cart max-[370px]:gap-0  max-[370px]:ml-4 flex relative items-center gap-6">
        {!user ? (
          <NavLink to="/login"><button className="login max-[400px]:ml-10 max-[370px]:px-2  max-[370px]:py-1.5 max-[370px]:text-sm hover:bg-orange-700 bg-[#ff5a5a] text-white px-4 py-2 cursor-pointer rounded-sm">Login</button></NavLink>
        ) : (
          <div className="relative">
            <button onClick={() => setProfileOpen(!profileOpen)} className="login max-[400px]:ml-10 max-[370px]:px-2  max-[370px]:py-1.5 max-[370px]:text-sm bg-[#ff5a5a] text-white px-4 py-2 cursor-pointer rounded-sm">
              {user.name}
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-auto bg-white border rounded-md shadow-lg z-50">
                <div className="p-4 border-b">
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
                <NavLink to="/profile" className="block px-4 py-2 hover:bg-gray-100">My Profile</NavLink>
                <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
              </div>
            )}
          </div>
        )}
        <NavLink to="/cart" className="z-1000 max-[400px]:w-8"><img src={cart_icon} alt="cart-logo" className="h-10 max-[400px]:w-15 " /></NavLink>
        <div className="icon absolute cursor-pointer top-0 right-0 bg-amber-500 rounded-full flex items-center justify-center z-4444 text-white text-sm w-5 h-5 max-[375px]:w-4 max-[375px]:h-4 max-[375px]:top-0">
          <p className="max-[375px]:text-xs">{num}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
