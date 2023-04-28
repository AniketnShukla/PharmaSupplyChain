import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";
import axios from 'axios'
export const ShopContext = createContext(null);



export const ShopContextProvider = (props) => {
  const [MEDS, setMEDS] = useState([])

//put the funciton because MEDS can only be defined within the main function ie SHopContextProvider
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < MEDS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };


  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    axios.get('http://localhost:3500/meds')
    .then((response) => {
      setMEDS(response.data)
    })
    .catch(e => console.log(e))
  },[]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // let itemInfo = MEDS.find((med) => med.messageAddress === Number(item));
        let itemInfo = MEDS[item];
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
