import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../../assets/cart_cross_icon.png"
const CartItems = () => {
    const { getTotalCartAmount, all_product,cartItems,removeFromCart}=useContext(ShopContext)
  return (
<div className="cartitems w-full max-w-screen-xl pt-20 mx-auto px-6 py-10">
  {/* Heading - Always Visible */}
  <h1 className="text-2xl font-bold text-center mb-6">Your Shopping Cart</h1>

  {/* Cart Header - Always Visible */}
  <div className="grid grid-cols-6 gap-4 justify-items-center text-[#454545] items-center text-sm font-medium w-full border-b p-4 ">
    <p>Product</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
  </div>

  {/* Product & Heading Layout for All Screens */}
  {all_product.map((item) => {
    if (cartItems[item.id] > 0) {
      return (
        <div key={item.id} className="w-full">
          <div className="grid grid-cols-6 gap-4 content-center justify-items-center items-center text-[#454545] p-4 border-b">
            <img src={item.image} alt="" className="w-16 h-auto mx-auto" />
            <p className="text-sm">{item.name}</p>
            <p className="text-sm">${item.new_price}</p>
            <button className="w-16 h-8 border rounded-md border-gray-300">
              {cartItems[item.id]}
            </button>
            <p className="text-sm">${item.new_price * cartItems[item.id]}</p>
            <img className="w-5 cursor-pointer mx-auto" src={remove_icon} onClick={() => removeFromCart(item.id)} alt="Remove" />
          </div>
        </div>
      );
    }
    return null;
  })}

  {/* Cart Totals Section */}
  <div className="mt-10 px-4">
    <h2 className="text-lg font-bold mb-4">Cart Totals</h2>
    <div className="flex flex-col gap-3">
      <p>Subtotal: <span className="font-semibold">${ getTotalCartAmount()}</span></p>
      <p>Shipping Fee: <span className="text-green-600">Free</span></p>
      <h3 className="font-bold text-lg sm:text-xl">Total: ${ getTotalCartAmount()}</h3>
    </div>
    <button className="bg-[#ff5a5a] cursor:pointer hover:bg-orange-700 text-white rounded-md py-2 px-6 mt-4 w-auto">
      PROCEED TO CHECKOUT
    </button>
  </div>

  {/* Promo Code Section */}
  <div className="mt-8">
    <h2 className="text-lg font-bold mb-4">Apply Promo Code</h2>
    <div className="flex flex-col sm:flex-row gap-4">
      <input type="text" placeholder="Enter Promo Code" className="border rounded-md px-3 py-1 w-full sm:w-60" />
      <button className="bg-black text-white rounded-md py-2 px-4">
        APPLY
      </button>
    </div>
  </div>
</div>
  )
}

export default CartItems
