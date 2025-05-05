import React, { useContext, useState } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../../assets/cart_cross_icon.png"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const CartItems = () => {
  const navigate = useNavigate()
  const [offer, setOffer] = useState("")
  const [discount, setDiscount] = useState(0)

  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext)

  const availableCoupons = [
    { code: "DISCOUNT10", discount: 10, description: "Get 10% off your purchase!" },
    { code: "SAVE20", discount: 20, description: "Save 20% on orders over $100!" },
    { code: "WELCOME15", discount: 15, description: "Enjoy 15% discounts on your purchase!" }
  ];

  const applyCoupon = (couponCode) => {
    setOffer(couponCode);
    handleOffer(null, couponCode);
  };

  const handleOffer = (e, couponCode = offer) => {
    if (e) e.preventDefault();

    const selectedCoupon = availableCoupons.find(coupon => coupon.code === couponCode);
    const totalAmount = getTotalCartAmount();

    if (!couponCode.trim()) {
        toast.error("Please enter a valid offer code", {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: true,
            theme: "colored",
        });
        return;
    }

    if (totalAmount < 200) {
        toast.warning("Cart total must be at least $200 to apply coupons!", {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: true,
            theme: "colored",
        });
        return;
    }

    if (selectedCoupon) {
        setDiscount(selectedCoupon.discount / 100);
        toast.success(`"${selectedCoupon.code}" applied successfully!`, {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: true,
            theme: "colored",
        });
    } else {
        toast.warning("Invalid offer code", {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: true,
            theme: "colored",
        });
        setDiscount(0);
    }

    setOffer("");
  };

  const totalAmount = getTotalCartAmount();
 
  const discountedAmount = totalAmount - (totalAmount * discount);
  if(discountedAmount ) {
    localStorage.setItem("cartTotal", discountedAmount);
  }
  else {
    localStorage.setItem("cartTotal", totalAmount);
  }

  const handleCheckout=()=>{
    if (totalAmount === 0) {
      toast.error("Your cart is empty!", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: true,
        theme: "colored",
      });
    } else {
  
      navigate("/checkout")
      toast.success("Proceeding to checkout...", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: true,
        theme: "colored",
      });
    }
  }


  const cartItemsByProduct = {};
  Object.entries(cartItems).forEach(([key, quantity]) => {
    if (quantity > 0) {
      const [productIdStr, size] = key.split("-");
      const productId = Number(productIdStr);
      if (!cartItemsByProduct[productId]) {
        cartItemsByProduct[productId] = [];
      }
      cartItemsByProduct[productId].push({ size, quantity });
    }
  });

  return (
    <div className="cartitems w-full max-w-screen-xl pt-20 mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-center mb-6">Your Shopping Cart</h1>
      <div className="grid grid-cols-6 gap-4 justify-items-center text-[#454545] items-center text-sm font-medium w-full border-b p-4">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      {all_product.map((item) => (
        cartItemsByProduct[item.id] ? (
          cartItemsByProduct[item.id].map(({ size, quantity }) => (
            <div key={`${item.id}-${size}`} className="w-full">
              <div className="grid grid-cols-6 gap-4 content-center justify-items-center items-center text-[#454545] p-4 border-b">
                <img src={item.image} alt="" className="w-16 h-auto mx-auto" />
                <p className="text-sm">{item.name} {size ? `(${size})` : ""}</p>
                <p className="text-sm">${item.new_price}</p>
                <button className="w-16 h-8 border rounded-md border-gray-300">{quantity}</button>
                <p className="text-sm">${item.new_price * quantity}</p>
                <img
                  className="w-5 cursor-pointer mx-auto"
                  src={remove_icon}
                  onClick={() => removeFromCart(`${item.id}-${size}`)}
                  alt="Remove"
                />
              </div>
            </div>
          ))
        ) : null
      ))}

     
      <div className="mt-10 px-4">
        <h2 className="text-lg font-bold mb-4">Cart Totals</h2>
        <div className="flex flex-col gap-3">
          <p>Subtotal: <span className="font-semibold">${totalAmount.toFixed(2)}</span></p>
          <p>Shipping Fee: <span className="text-green-600">Free</span></p>
          {discount > 0 && (
            <p>Discount Applied: <span className="text-green-600">-${(totalAmount * discount).toFixed(2)}</span></p>
          )}
          <h3 className="font-bold text-lg sm:text-xl">Total: ${discountedAmount.toFixed(2)}</h3>
        </div>
        <button onClick={handleCheckout} className="bg-[#ff5a5a] cursor-pointer hover:bg-orange-700 text-white rounded-md py-2 px-6 mt-4 w-auto">
          PROCEED TO CHECKOUT
        </button>
      </div>

    
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">Apply Promo Code</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <input 
            type="text" 
            value={offer} 
            onChange={(e) => setOffer(e.target.value)} 
            placeholder="Enter Promo Code" 
            className="border rounded-md px-3 py-1 w-full sm:w-60" 
          />
          <button onClick={handleOffer} className="bg-black text-white cursor-pointer rounded-md py-2 px-4">
            APPLY
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">Available Coupons</h2>
        <div className="flex flex-col gap-4">
          {availableCoupons.map((coupon) => (
            <div key={coupon.code} className="p-4 border rounded-md cursor-pointer hover:bg-gray-100" onClick={() => applyCoupon(coupon.code)}>
              <p className="font-semibold">{coupon.code}</p>
              <p className="text-sm text-gray-600">{coupon.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CartItems;
