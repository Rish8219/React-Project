import React, { useEffect, useState, useContext } from "react";
import { jsPDF } from "jspdf";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { ShopContext } from "../Context/ShopContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { user, cartItems, all_product, setCartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    paymentMethod: "credit-card",
  });
  const [totalAmount, setTotalAmount] = useState(0);
  const [shippingMethod, setShippingMethod] = useState("road"); // Default: Road (Free)
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const total = localStorage.getItem("cartTotal");
    if (total) {
      setTotalAmount(JSON.parse(total));
    }
  }, []);

  useEffect(() => {
    if (user) {
      setFormData({
        ...formData,
        name: user.name || "",
        email: user.email || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShippingChange = (e) => {
    setShippingMethod(e.target.value);

    const shippingCosts = {
      road: 0,
      normal: 5,
      express: 10,
      super: 20,
    };

    setTotalAmount(parseFloat(localStorage.getItem("cartTotal")) + shippingCosts[e.target.value]);
  };

  const handleOrderPlacement = () => {
    if (!user) {
      toast.error("You must be logged in to place an order.", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: true,
        theme: "colored",
      });
      navigate("/login");
      return;
    }

    if ( !formData.name || !formData.email || !formData.address || !formData.city || !formData.zip) {
      toast.error(`Please fill all the fields!`, {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: true,
        theme: "colored",
      });
      return;
    }

    // Save order to localStorage
    const orders = localStorage.getItem("orders");
    const allOrders = orders ? JSON.parse(orders) : [];

    // Prepare order items with size info
    const items = [];
    for (const itemKey in cartItems) {
      if (cartItems[itemKey] > 0) {
        const [itemIdStr, size] = itemKey.split("-");
        const product = all_product.find(p => p.id === Number(itemIdStr));
        if (product) {
          items.push({
            id: product.id,
            name: product.name,
            size: size || null,
            quantity: cartItems[itemKey],
            price: product.new_price,
          });
        }
      }
    }

    const newOrder = {
      date: new Date().toISOString(),
      name: formData.name,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      zip: formData.zip,
      paymentMethod: formData.paymentMethod,
      totalAmount,
      items,
    };

    allOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(allOrders));

    setOrderPlaced(true);
    toast.success(`Your Order Placed Successfully!`, {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: true,
      theme: "colored",
    });

    // Clear cart after order
    setCartItems(() => {
      const emptyCart = {};
      for (let product of all_product) {
        if (product.size && product.size.length > 0) {
          product.size.forEach((size) => {
            const key = `${product.id}-${size}`;
            emptyCart[key] = 0;
          });
        } else {
          emptyCart[product.id] = 0;
        }
      }
      return emptyCart;
    });

    // Navigate to profile page after successful order placement
    navigate("/profile");
  };

  const generateInvoicePDF = () => {
    if (!orderPlaced) {
      toast.error(`Place Your Order First!`, {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: true,
        theme: "colored",
      });
      return;
    }

    toast.success(`Invoice Downloaded Successfully!`, {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: true,
      theme: "colored",
    });

    const pdf = new jsPDF();

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(18);
    pdf.text("Invoice Summary", 20, 20);

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(14);
    pdf.text(`Name: ${formData.name}`, 20, 40);
    pdf.text(`Email: ${formData.email}`, 20, 50);
    pdf.text(`Address: ${formData.address}, ${formData.city}, ${formData.zip}`, 20, 60);
    pdf.text(`Payment Method: ${formData.paymentMethod}`, 20, 70);

    pdf.line(20, 65, 190, 65); // Divider line

    pdf.text(`Subtotal: $${localStorage.getItem("cartTotal")}`, 20, 80);
    pdf.text(`Shipping (${shippingMethod}): ${shippingMethod === "road" ? "Free" : shippingMethod === "normal" ? "$5" : shippingMethod === "express" ? "$10" : "$20"}`, 20, 90);
    pdf.setFont("helvetica", "bold");
    pdf.text(`Total: $${totalAmount}`, 20, 100);

    // Add items with size info
    let y = 110;
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);
    for (const item of items) {
      const sizeText = item.size ? ` (Size: ${item.size})` : "";
      pdf.text(`${item.name}${sizeText} x${item.quantity} - $${item.price * item.quantity}`, 20, y);
      y += 10;
    }

    pdf.save("Invoice.pdf");
  };

  return (
    <div className="checkout-container user-select-none max-w-screen-lg mx-auto px-6 py-10">
      <h1 className="text-3xl pt-10 font-bold text-center mb-6">Checkout</h1>

      {/* Billing Details */}
      <div className="billing-details bg-gray-100 p-6 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
        <form className="flex flex-col gap-4">
          <input type="text" name="name" placeholder="Full Name" className="border rounded-md p-2 w-full" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="border rounded-md p-2 w-full" value={formData.email} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" className="border rounded-md p-2 w-full" value={formData.address} onChange={handleChange} required />
          <div className="flex gap-4">
            <input type="text" name="city" placeholder="City" className="border rounded-md p-2 w-full" value={formData.city} onChange={handleChange} required />
            <input type="text" name="zip" placeholder="ZIP Code" className="border rounded-md p-2 w-full" value={formData.zip} onChange={handleChange} required />
          </div>
        </form>
      </div>

      {/* Order Summary */}
      <div className="order-summary bg-gray-100 p-6 rounded-md mt-6 user-select-none">
        <h2 className="text-xl font-semibold mb-4">Invoice Summary</h2>
        <p>Name: <span className="font-semibold">{formData.name}</span></p>
        <p>Email: <span className="font-semibold">{formData.email}</span></p>
        <p>Address: <span className="font-semibold">{formData.address}, {formData.city}, {formData.zip}</span></p>
        <p>Subtotal: <span className="font-semibold">${localStorage.getItem("cartTotal")}</span></p>
        <p>Shipping Method: <span className="font-semibold">{shippingMethod.charAt(0).toUpperCase() + shippingMethod.slice(1)}</span></p>
        <p>Payment Method: <span className="font-semibold">{formData.paymentMethod}</span></p>

        <p>Shipping Charges: <span className="font-semibold">{shippingMethod === "road" ? "Free" : `$${shippingMethod === "normal" ? "5" : shippingMethod === "express" ? "10" : "20"}`}</span></p>
        <h3 className="font-bold text-lg mt-2">Total Amount: ${totalAmount}</h3>
      </div>

      {/* Shipping Selection */}
      <div className="shipping-method bg-gray-100 p-6 rounded-md mt-6">
        <h2 className="text-xl font-semibold mb-4">Shipping Method</h2>
        <select name="shippingMethod" className="border rounded-md p-2 w-full" value={shippingMethod} onChange={handleShippingChange}>
          <option value="road">Road (Free)</option>
          <option value="normal">Normal ($5)</option>
          <option value="express">Express ($10)</option>
          <option value="super">Super ($20)</option>
        </select>
      </div>

      {/* Payment Method Selection */}
      <div className="payment-method bg-gray-100 p-6 rounded-md mt-6">
        <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
        <select name="paymentMethod" className="border rounded-md p-2 w-full" value={formData.paymentMethod} onChange={handleChange}>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bank-transfer">Bank Transfer</option>
          <option value="cash-on-delivery">Cash on Delivery</option>
        </select>
      </div>

      {/* Order Actions */}
      <div className="flex gap-4 mt-6">
        <button className="bg-green-600 cursor-pointer hover:bg-green-800 text-white rounded-md py-3 px-6 w-full font-medium" onClick={handleOrderPlacement}>
          Place Order
        </button>
        <button className="bg-[#ff5a5a] hover:bg-orange-800 cursor-pointer text-white rounded-md py-3 px-6 w-full font-medium" onClick={generateInvoicePDF} disabled={!orderPlaced}>
          Download Invoice
        </button>
      </div>
    </div>
  );
};

export default Checkout;
