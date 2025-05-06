import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "user",
  });

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const saveUsersToLocalStorage = (updatedUsers) => {
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleUserInputChange = (e, isNew = false) => {
    const { name, value } = e.target;
    if (isNew) {
      setNewUser((prev) => ({ ...prev, [name]: value }));
    } else if (editingUser) {
      setEditingUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email) {
      toast.error("Please fill at least Name and Email for new user");
      return;
    }
    if (users.find((user) => user.email === newUser.email)) {
      toast.error("Email already exists");
      return;
    }
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    saveUsersToLocalStorage(updatedUsers);
    setNewUser({ name: "", email: "", role: "user" });
    toast.success("User added successfully");
  };

  const handleEditUserClick = (user) => {
    setEditingUser({ ...user });
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    if (editingUser) {
      const updatedUsers = users.map((user) =>
        user.email === editingUser.email ? editingUser : user
      );
      setUsers(updatedUsers);
      saveUsersToLocalStorage(updatedUsers);
      setEditingUser(null);
      toast.success("User updated successfully");
    }
  };

  const handleDeleteUser = (email) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const updatedUsers = users.filter((user) => user.email !== email);
      setUsers(updatedUsers);
      saveUsersToLocalStorage(updatedUsers);
      toast.info("User deleted");
    }
  };

  const handleCancelUserEdit = () => {
    setEditingUser(null);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold my-6 pt-10">Admin Panel - User Management</h1>

      <form onSubmit={handleAddUser} className="mb-8 border p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" name="name" placeholder="Name" value={newUser.name} onChange={(e) => handleUserInputChange(e, true)} className="border p-2 rounded" required />
          <input type="email" name="email" placeholder="Email" value={newUser.email} onChange={(e) => handleUserInputChange(e, true)} className="border p-2 rounded" required />
          <select name="role" value={newUser.role} onChange={(e) => handleUserInputChange(e, true)} className="border p-2 rounded">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer">Add User</button>
      </form>

      <h2 className="text-xl font-semibold mb-4">Existing Users</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Role</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) =>
            editingUser && editingUser.email === user.email ? (
              <tr key={user.email}>
                <td className="border border-gray-300 p-2">
                  <input type="text" name="name" value={editingUser.name} onChange={handleUserInputChange} className="border p-1 rounded w-full" />
                </td>
                <td className="border border-gray-300 p-2">
                  <input type="email" name="email" value={editingUser.email} onChange={handleUserInputChange} className="border p-1 rounded w-full" />
                </td>
                <td className="border border-gray-300 p-2">
                  <select name="role" value={editingUser.role} onChange={handleUserInputChange} className="border p-1 rounded w-full">
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td className="border border-gray-300 p-2 flex gap-2">
                  <button onClick={handleUpdateUser} className="bg-black text-white px-2 py-1 rounded hover:bg-blue-700 cursor-pointer">Save</button>
                  <button onClick={handleCancelUserEdit} className="bg-gray-400 text-white px-2 py-1 rounded hover:bg-gray-500 cursor-pointer">Cancel</button>
                </td>
              </tr>
            ) : (
              <tr key={user.email}>
                <td className="border border-gray-300 p-2">{user.name}</td>
                <td className="border border-gray-300 p-2">{user.email}</td>
                <td className="border border-gray-300 p-2">{user.role}</td>
                <td className="border border-gray-300 p-2 flex gap-2">
                  <button onClick={() => handleEditUserClick(user)} className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 cursor-pointer">Edit</button>
                  <button onClick={() => handleDeleteUser(user.email)} className="bg-orange-500 text-white px-2 py-1 rounded hover:bg-orange-600 cursor-pointer">Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
