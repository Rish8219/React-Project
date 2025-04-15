import React from 'react';
import { ToastContainer } from "react-toastify";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import ShopContextProvider from './Context/ShopContext';


const App = () => {
  return (
    <div className='relative'>
   {/* <SimpleBar style={{ maxHeight: '100vh' }}> */}

       <ShopContextProvider>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </ShopContextProvider>
      <ToastContainer />
      {/* </SimpleBar> */}

    </div>
  );
}

export default App;
