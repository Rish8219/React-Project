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
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const [stock, setStock] = useState(getDefaultStock());

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [all_product, setAllProduct] = useState(all_product_data);

  const [num, setNum] = useState(0);

  useEffect(() => {
    setNum(Object.values(cartItems).reduce((acc, val) => acc + val, 0));
  }, [cartItems]);

  const loginUser = (userData) => {
    setUser(userData);
    toast.success(`Welcome back, ${userData.name || userData.email}!`, {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: true,
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
    loginUser,
    logoutUser,
    setCartItems,
    stock,
    setStock,
    addReview,
  };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
export { ShopContext };
