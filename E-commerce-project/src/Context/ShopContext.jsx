import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import all_product from "../assets/all_product";

const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [num, setNum] = useState(0);
   


    const addToCart = (itemId,setStock) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        setNum((prev) => prev + 1);
        setStock((prev) => prev - 1); // Decrease stock by 1 when item is added to cart

   

        let itemInfo = all_product.find((product) => product.id === Number(itemId));
        toast.success(`${itemInfo.name} added to cart!`, {
            // position: "top-left",
            //position to be middle
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: true,

        });
    };

    const removeFromCart = (itemId,setStock) => {
        if (cartItems[itemId] > 0) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
            setNum((prev) => prev - 1);
            setStock((prev) => prev + 1); // Increase stock by 1 when item is removed from cart

            let itemInfo = all_product.find((product) => product.id === Number(itemId));
            toast.info(`${itemInfo.name} removed from cart!`, {
                position: "top-left",
                autoClose: 1000,
                hideProgressBar: true,

                // theme: "colored",




                // autoClose: 1000,
            });
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const contextValue = { num, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart,  };

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
export { ShopContext };