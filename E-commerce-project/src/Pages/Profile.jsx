import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const Profile = () => {
  const { user, setUser } = useContext(ShopContext);
  const navigate = useNavigate();
  const [orderHistory, setOrderHistory] = useState([]);
  const [username, setUsername] = useState(user ? user.name || "" : "");
  const [email, setEmail] = useState(user ? user.email || "" : "");
  const [password, setPassword] = useState("");

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

    const orders = localStorage.getItem("orders");
    if (orders) {
      const allOrders = JSON.parse(orders);
 
      const userOrders = allOrders.filter(order => order.email === user.email);
      setOrderHistory(userOrders);
    }
  }, [user, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();

   
    if (!username.trim()) {
      toast.error("Username cannot be empty.", { position: "top-left" });
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.", { position: "top-left" });
      return;
    }
    if (password && password.length < 6) {
      toast.error("Password must be at least 6 characters long.", { position: "top-left" });
      return;
    }

   
    const updatedUser = {
      ...user,
      name: username,
      email: email,
    };
    if (password) {
      updatedUser.password = password; 
    }

    setUser(updatedUser);
    toast.success("Profile updated successfully!", { position: "top-left" });

  
    setPassword("");
  };

  return (
    <div className="profile-container max-w-screen-lg mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold pt-8 mb-6">Profile</h1>

      <form onSubmit={handleUpdate} className="mb-10 max-w-md">
        <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block font-medium mb-1">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-1">New Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Leave blank to keep current password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded cursor-pointer hover:bg-blue-700 transition"
        >
          Update Profile
        </button>
      </form>

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
