import React from 'react';
import { ToastContainer } from "react-toastify";

import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import ShopContextProvider from './Context/ShopContext';


const App = () => {
  return (
    <div className='relative'>
      <ShopContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </ShopContextProvider>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick={true}
        pauseOnHover={false}
        draggable={false}
        theme="colored" />

    </div>
  );
}

export default App;
