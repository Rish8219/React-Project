import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const Profile = () => {
  const { user } = useContext(ShopContext);
  const navigate = useNavigate();
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    if (!user) {
      toast.error("You must be logged in to view your profile.", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: true,
        theme: "colored",
      });
      navigate("/login");
      return;
    }
    // Load order history from localStorage or empty array
    const orders = localStorage.getItem("orders");
    if (orders) {
      const allOrders = JSON.parse(orders);
      // Filter orders for current user by email
      const userOrders = allOrders.filter(order => order.email === user.email);
      setOrderHistory(userOrders);
    }
  }, [user, navigate]);

  return (
    <div className="profile-container max-w-screen-lg mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold pt-8 mb-6">Profile</h1>
      <h2 className="text-xl font-semibold mb-4">Order History</h2>
      {orderHistory.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <div className="order-list space-y-4">
          {orderHistory.map((order, index) => (
            <div key={index} className="order-item border rounded-md p-4">
              <p><strong>Order Date:</strong> {new Date(order.date).toLocaleString()}</p>
              <p><strong>Name:</strong> {order.name}</p>
              <p><strong>Email:</strong> {order.email}</p>
              <p><strong>Address:</strong> {order.address}, {order.city}, {order.zip}</p>
              <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
              <p><strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}</p>
              <p><strong>Items:</strong></p>
              <ul className="list-disc list-inside">
                {order.items.map((item, idx) => (
                  <li key={idx}>{item.name} - Quantity: {item.quantity} - Price: ${item.price}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
