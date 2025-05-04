import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import { toast } from "react-toastify";

const AdminPanel = () => {
  const { all_product, addProduct, updateProduct, deleteProduct } = useContext(ShopContext);

  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    category: "",
    new_price: "",
    old_price: "",
    available_stock: "",
    description: "",
    size: "",
    image: "",
  });

  useEffect(() => {
    setProducts(all_product);
  }, [all_product]);

  const handleInputChange = (e, isNew = false) => {
    const { name, value } = e.target;
    if (isNew) {
      setNewProduct((prev) => ({ ...prev, [name]: value }));
    } else if (editingProduct) {
      setEditingProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.id || !newProduct.name) {
      toast.error("Please fill at least ID and Name for new product");
      return;
    }
    // Convert id and prices to numbers
    const productToAdd = {
      ...newProduct,
      id: Number(newProduct.id),
      new_price: Number(newProduct.new_price),
      old_price: Number(newProduct.old_price),
      available_stock: Number(newProduct.available_stock),
      size: newProduct.size ? newProduct.size.split(",").map(s => s.trim()) : [],
      image: newProduct.image || "",
      description: newProduct.description || "",
    };
    addProduct(productToAdd);
    setNewProduct({
      id: "",
      name: "",
      category: "",
      new_price: "",
      old_price: "",
      available_stock: "",
      description: "",
      size: "",
      image: "",
    });
    toast.success("Product added successfully");
  };

  const handleEditClick = (product) => {
    setEditingProduct({ ...product });
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    if (editingProduct) {
      const updatedProduct = {
        ...editingProduct,
        id: Number(editingProduct.id),
        new_price: Number(editingProduct.new_price),
        old_price: Number(editingProduct.old_price),
        available_stock: Number(editingProduct.available_stock),
        size: editingProduct.size ? (typeof editingProduct.size === "string" ? editingProduct.size.split(",").map(s => s.trim()) : editingProduct.size) : [],
      };
      updateProduct(updatedProduct);
      setEditingProduct(null);
      toast.success("Product updated successfully");
    }
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(productId);
      toast.info("Product deleted");
    }
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 pt-20">Admin Panel - Product Management</h1>

      {/* Add New Product Form */}
      <form onSubmit={handleAddProduct} className="mb-8 border p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4  ">Add New Product</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="number" name="id" placeholder="ID" value={newProduct.id} onChange={(e) => handleInputChange(e, true)} className="border p-2 rounded" required />
          <input type="text" name="name" placeholder="Name" value={newProduct.name} onChange={(e) => handleInputChange(e, true)} className="border p-2 rounded" required />
          <input type="text" name="category" placeholder="Category" value={newProduct.category} onChange={(e) => handleInputChange(e, true)} className="border p-2 rounded" />
          <input type="text" name="size" placeholder="Sizes (comma separated)" value={newProduct.size} onChange={(e) => handleInputChange(e, true)} className="border p-2 rounded" />
          <input type="number" step="0.01" name="new_price" placeholder="New Price" value={newProduct.new_price} onChange={(e) => handleInputChange(e, true)} className="border p-2 rounded" />
          <input type="number" step="0.01" name="old_price" placeholder="Old Price" value={newProduct.old_price} onChange={(e) => handleInputChange(e, true)} className="border p-2 rounded" />
          <input type="number" name="available_stock" placeholder="Available Stock" value={newProduct.available_stock} onChange={(e) => handleInputChange(e, true)} className="border p-2 rounded" />
          <input type="text" name="image" placeholder="Image URL or path" value={newProduct.image} onChange={(e) => handleInputChange(e, true)} className="border p-2 rounded" />
          <input type="text" name="description" placeholder="Description" value={newProduct.description} onChange={(e) => handleInputChange(e, true)} className="border p-2 rounded" />
        </div>
        <button type="submit" className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer">Add Product</button>
      </form>

      {/* Product List */}
      <h2 className="text-xl font-semibold mb-4">Existing Products</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Category</th>
            <th className="border border-gray-300 p-2">Sizes</th>
            <th className="border border-gray-300 p-2">New Price</th>
            <th className="border border-gray-300 p-2">Old Price</th>
            <th className="border border-gray-300 p-2">Stock</th>
            <th className="border border-gray-300 p-2">Description</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) =>
            editingProduct && editingProduct.id === product.id ? (
              <tr key={product.id}>
                <td className="border border-gray-300 p-2">{product.id}</td>
                <td className="border border-gray-300 p-2">
                  <input type="text" name="name" value={editingProduct.name} onChange={handleInputChange} className="border p-1 rounded w-full" />
                </td>
                <td className="border border-gray-300 p-2">
                  <input type="text" name="category" value={editingProduct.category} onChange={handleInputChange} className="border p-1 rounded w-full" />
                </td>
                <td className="border border-gray-300 p-2">
                  <input type="text" name="size" value={Array.isArray(editingProduct.size) ? editingProduct.size.join(", ") : editingProduct.size} onChange={handleInputChange} className="border p-1 rounded w-full" />
                </td>
                <td className="border border-gray-300 p-2">
                  <input type="number" step="0.01" name="new_price" value={editingProduct.new_price} onChange={handleInputChange} className="border p-1 rounded w-full" />
                </td>
                <td className="border border-gray-300 p-2">
                  <input type="number" step="0.01" name="old_price" value={editingProduct.old_price} onChange={handleInputChange} className="border p-1 rounded w-full" />
                </td>
                <td className="border border-gray-300 p-2">
                  <input type="number" name="available_stock" value={editingProduct.available_stock} onChange={handleInputChange} className="border p-1 rounded w-full" />
                </td>
                <td className="border border-gray-300 p-2">
                  <input type="text" name="description" value={editingProduct.description} onChange={handleInputChange} className="border p-1 rounded w-full" />
                </td>
                <td className="border border-gray-300 p-2 flex gap-2">
                  <button onClick={handleUpdateProduct} className="bg-black text-white px-2 py-1 rounded hover:bg-blue-700 cursor-pointer">Save</button>
                  <button onClick={handleCancelEdit} className="bg-gray-400 text-white px-2 py-1 rounded hover:bg-gray-500 cursor-pointer">Cancel</button>
                </td>
              </tr>
            ) : (
              <tr key={product.id}>
                <td className="border border-gray-300 p-2">{product.id}</td>
                <td className="border border-gray-300 p-2">{product.name}</td>
                <td className="border border-gray-300 p-2">{product.category}</td>
                <td className="border border-gray-300 p-2">{Array.isArray(product.size) ? product.size.join(", ") : product.size}</td>
                <td className="border border-gray-300 p-2">{product.new_price}</td>
                <td className="border border-gray-300 p-2">{product.old_price}</td>
                <td className="border border-gray-300 p-2">{product.available_stock}</td>
                <td className="border border-gray-300 p-2">{product.description}</td>
                <td className="border border-gray-300 p-2 flex gap-2">
                  <button onClick={() => handleEditClick(product)} className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 cursor-pointer">Edit</button>
                  <button onClick={() => handleDeleteProduct(product.id)} className="bg-orange-500 text-white px-2 py-1 rounded hover:bg-orange-600 cursor-pointer">Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
