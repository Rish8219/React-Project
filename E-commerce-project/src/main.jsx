import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Shop from './Pages/Shop.jsx'
import Cart from './Pages/Cart.jsx'
import ShopCategory from "./pages/ShopCategory.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Product from './Pages/Product.jsx'
import LoginSignup, { Login } from './Pages/LoginSignup.jsx'
import ShopContextProvider from './Context/ShopContext.jsx'
import men_banner from "./assets/banner_mens.png"
import women_banner from "./assets/banner_women.png"
import kid_banner from "./assets/banner_kids.png"
import Checkout from './Pages/Checkout.jsx'
import Profile from './Pages/Profile.jsx'
import SizePage from './Pages/SizePage.jsx'
const routes = createBrowserRouter([{
  path: "/",
  element:  <ShopContextProvider> <App/> </ShopContextProvider>,
  children: [
  {
    path: "/",
    element: <Shop></Shop>,
  },
   {
    path: "/men",
    element: <ShopCategory  banner={men_banner} category="men"/>
  },
  {
    path: "/women",
    element: <ShopCategory banner={women_banner} category="women"/>
  },
  {
    path: "/kid",
    element: <ShopCategory banner={kid_banner} category="kid"/>
  },
  {
    path: "/product",
    element: <Product/>
  },
  {
    path: "/product/:productId",
    element: <Product/>,
  },
  {
    path: "/size/:size",
    element: <SizePage/>
  },
  {
    path: "/cart",
    element: <Cart/>,

  },
  {
    path: "/checkout",
    element: <Checkout/>
  },
  {
    path:"/signup",
    element:<LoginSignup/>
  },
  {
    path: "/login",
    element:<Login/>
  },
  {
    path: "/profile",
    element:<Profile/>
    }


  ]}]


)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
    </ShopContextProvider>
   
  </StrictMode>,
)
