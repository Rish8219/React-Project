import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Shop from './Pages/Shop.jsx'
import Cart from './Pages/Cart.jsx'
import ShopCategory from "./pages/ShopCategory.jsx"
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import Product from './Pages/Product.jsx'
import LoginSignup, { Login } from './Pages/LoginSignup.jsx'
import ShopContextProvider from './Context/ShopContext.jsx'
import men_banner from "./assets/banner_mens.png"
import women_banner from "./assets/banner_women.png"
import kid_banner from "./assets/banner_kids.png"
import Checkout from './Pages/Checkout.jsx'
import Profile from './Pages/Profile.jsx'
import SizePage from './Pages/SizePage.jsx'
import AdminPanel from './Pages/AdminPanel.jsx';
import { useContext } from "react";
import { ShopContext } from "./Context/ShopContext.jsx";

const RequireAdmin = ({ children }) => {
  const { user } = useContext(ShopContext);
  if (!user || user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const RequireUser = ({ children }) => {
  const { user } = useContext(ShopContext);
  if (!user || user.role !== "user") {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ShopContextProvider><App /></ShopContextProvider>,
    children: [
      {
        path: "/",
        element: <RequireUser><Shop /></RequireUser>,
      },
      {
        path: "/men",
        element: <RequireUser><ShopCategory banner={men_banner} category="men" /></RequireUser>
      },
      {
        path: "/women",
        element: <RequireUser><ShopCategory banner={women_banner} category="women" /></RequireUser>
      },
      {
        path: "/kid",
        element: <RequireUser><ShopCategory banner={kid_banner} category="kid" /></RequireUser>
      },
      {
        path: "/product",
        element: <RequireUser><Product /></RequireUser>
      },
      {
        path: "/product/:productId",
        element: <RequireUser><Product /></RequireUser>,
      },
      {
        path: "/size/:size",
        element: <RequireUser><SizePage /></RequireUser>
      },
      {
        path: "/cart",
        element: <RequireUser><Cart /></RequireUser>,
      },
      {
        path: "/checkout",
        element: <RequireUser><Checkout /></RequireUser>
      },
      {
        path: "/signup",
        element: <LoginSignup />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/profile",
        element: <RequireUser><Profile /></RequireUser>
      },
      {
        path: "/admin",
        element: <RequireAdmin><AdminPanel /></RequireAdmin>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
