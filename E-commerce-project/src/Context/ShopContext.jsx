import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import all_product_data from "../assets/all_product";

const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let product of all_product_data) {
    if (product.size && product.size.length > 0) {
      product.size.forEach((size) => {
        const key = `${product.id}-${size}`;
        cart[key] = 0;
      });
    } else {
      cart[product.id] = 0;
    }
  }
  return cart;
};

const getDefaultStock = () => {
  let stock = {};
  for (let product of all_product_data) {
    if (product.size && product.size.length > 0 && product.stock_per_size) {
      stock[product.id] = {};
      product.size.forEach((size) => {
        stock[product.id][size] = product.stock_per_size[size] || 0;
      });
    } else {
      stock[product.id] = product.available_stock || 0;
    }
  }
  return stock;
};

const ShopContextProvider = (props) => {
  // Initialize cartItems and stock directly from all_product_data, ignoring localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    if (user) {
      const savedCart = localStorage.getItem(`cartItems_${user.id || user.email}`);
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      } else {
        setCartItems(getDefaultCart());
      }
    } else {
      setCartItems(getDefaultCart());
    }
  }, [user]);

  const [stock, setStock] = useState(getDefaultStock());

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const [all_product, setAllProduct] = useState(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const userObj = JSON.parse(savedUser);
      const savedProducts = localStorage.getItem(`all_product_${userObj.id || userObj.email}`);
      return savedProducts ? JSON.parse(savedProducts) : all_product_data;
    }
    return all_product_data;
  });


  const [num, setNum] = useState(0);

  useEffect(() => {
    setNum(Object.values(cartItems).reduce((acc, val) => acc + val, 0));
    // Update cartTotal in localStorage whenever cartItems, all_product or user change
    const totalAmount = Object.entries(cartItems).reduce((total, [key, quantity]) => {
      if (quantity > 0) {
        const [itemIdStr] = key.split("-");
        const product = all_product.find(p => p.id === Number(itemIdStr));
        if (product) {
          total += product.new_price * quantity;
        }
      }
      return total;
    }, 0);
    localStorage.setItem("cartTotal", JSON.stringify(totalAmount));
    if (user) {
      localStorage.setItem(`cartItems_${user.id || user.email}`, JSON.stringify(cartItems));
      localStorage.setItem(`all_product_${user.id || user.email}`, JSON.stringify(all_product));
    } else {
      localStorage.removeItem("cartItems");
      localStorage.removeItem("all_product");
    }
  }, [cartItems, all_product, user]);

  const loginUser = (userData) => {
    setUser(userData);
    toast.success(`Welcome back, ${userData.name || userData.email}!`, {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: true,
    });
  };

  // Add product
  const addProduct = (newProduct) => {
    setAllProduct((prevProducts) => {
      const updatedProducts = [...prevProducts, newProduct];
      localStorage.setItem("all_product", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  // Update product by id
  const updateProduct = (updatedProduct) => {
    setAllProduct((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
      localStorage.setItem("all_product", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  // Delete product by id
  const deleteProduct = (productId) => {
    setAllProduct((prevProducts) => {
      const updatedProducts = prevProducts.filter((product) => product.id !== productId);
      localStorage.setItem("all_product", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  const logoutUser = () => {
    setUser(null);
    toast.info("Logged out successfully", {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: true,
    });
  };

  const addToCart = (itemId, size) => {
    if (stock[itemId]) {
      if (typeof stock[itemId] === "object") {
        if (stock[itemId][size] > 0) {
          setCartItems((prev) => {
            const key = `${itemId}-${size}`;
            return { ...prev, [key]: (prev[key] || 0) + 1 };
          });
          setNum((prev) => prev + 1);
          setStock((prev) => ({
            ...prev,
            [itemId]: {
              ...prev[itemId],
              [size]: prev[itemId][size] - 1,
            },
          }));
          setAllProduct((prevProducts) => {
            return prevProducts.map((product) => {
              if (product.id === Number(itemId)) {
                const updatedStockPerSize = { ...product.stock_per_size };
                updatedStockPerSize[size] = (updatedStockPerSize[size] || 0) - 1;
                return { ...product, stock_per_size: updatedStockPerSize };
              }
              return product;
            });
          });
          let itemInfo = all_product.find((product) => product.id === Number(itemId));
          toast.success(`${itemInfo.name} (${size}) added to cart!`, {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: true,
          });
        } else {
          toast.error(`Sorry, this size is out of stock.`, {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: true,
          });
        }
      } else {
        if (stock[itemId] > 0) {
          setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
          setNum((prev) => prev + 1);
          setStock((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
          setAllProduct((prevProducts) => {
            return prevProducts.map((product) => {
              if (product.id === Number(itemId)) {
                const updatedAvailableStock = (product.available_stock || 0) - 1;
                return { ...product, available_stock: updatedAvailableStock };
              }
              return product;
            });
          });
          let itemInfo = all_product.find((product) => product.id === Number(itemId));
          toast.success(`${itemInfo.name} added to cart!`, {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: true,
          });
        } else {
          toast.error("Sorry, this product is out of stock.", {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: true,
          });
        }
      }
    }
  };

  const removeFromCart = (itemKey) => {
    if (cartItems[itemKey] > 0) {
      const [itemIdStr, size] = itemKey.toString().split("-");
      const itemId = Number(itemIdStr);
      setCartItems((prev) => ({ ...prev, [itemKey]: prev[itemKey] - 1 }));
      setNum((prev) => prev - 1);
      if (size) {
        setStock((prev) => ({
          ...prev,
          [itemId]: {
            ...prev[itemId],
            [size]: prev[itemId][size] + 1,
          },
        }));
        setAllProduct((prevProducts) => {
          return prevProducts.map((product) => {
            if (product.id === itemId) {
              const updatedStockPerSize = { ...product.stock_per_size };
              updatedStockPerSize[size] = (updatedStockPerSize[size] || 0) + 1;
              return { ...product, stock_per_size: updatedStockPerSize };
            }
            return product;
          });
        });
      } else {
        setStock((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        setAllProduct((prevProducts) => {
          return prevProducts.map((product) => {
            if (product.id === itemId) {
              const updatedAvailableStock = (product.available_stock || 0) + 1;
              return { ...product, available_stock: updatedAvailableStock };
            }
            return product;
          });
        });
      }
      let itemInfo = all_product.find((product) => product.id === itemId);
      toast.info(`${itemInfo.name} removed from cart!`, {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: true,
      });
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemKey in cartItems) {
      if (cartItems[itemKey] > 0) {
        const [itemIdStr] = itemKey.split("-");
        let itemInfo = all_product.find((product) => product.id === Number(itemIdStr));
        totalAmount += itemInfo.new_price * cartItems[itemKey];
      }
    }
    return totalAmount;
  };

  const addReview = (productId, newReview) => {
    setAllProduct((prevProducts) => {
      const updatedProducts = prevProducts.map((product) => {
        if (product.id === productId) {
          const updatedReviews = product.reviews ? [...product.reviews, newReview] : [newReview];
          return { ...product, reviews: updatedReviews };
        }
        return product;
      });
      localStorage.setItem("all_product", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  const contextValue = {
       num,
       all_product,
       cartItems,
       addToCart,
       removeFromCart,
       getTotalCartAmount,
       user,
       setUser,
       loginUser,
       logoutUser,
       setCartItems,
       stock,
       setStock,
       addReview,
       addProduct,
       updateProduct,
       deleteProduct,
    
   };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
export { ShopContext };
