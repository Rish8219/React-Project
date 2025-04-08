import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Shop from './Pages/Shop.jsx'
import Cart from './Pages/Cart.jsx'
import ShopCategory from "./pages/ShopCategory.jsx"
import {createBrowserRouter,RouterProvider} from "react-router-dom"

const routes=createBrowserRouter([{
  path:"/",
element:<App/>,
children:[
  {
    path:"",
    element:<Shop/>

  },{
    path:"/cart",
    element:<Cart/>
  },{
    path:"/shopcategories",
    element:<ShopCategory/>
  }


]

}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={routes}></RouterProvider>
  </StrictMode>,
)
