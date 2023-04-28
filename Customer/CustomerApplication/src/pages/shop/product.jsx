import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";

export const Product = (props) => {
  //Assigned temporary price, work on this later **** very important
  const { medicineAddress, description, quantity, price} = props.data;
   
  const { addToCart, cartItems } = useContext(ShopContext);
  const [sessionStoredOrders, setSessionStoredOrders] = useState([])
  // console.log(props.data) 
  useEffect(() => {
    const orderArrayString = sessionStorage.getItem('orderArray');
    const orderArray = JSON.parse(orderArrayString)
    setSessionStoredOrders(orderArray)
  },[])
  const cartItemCount = cartItems[medicineAddress];

  return (
    <div className="product">
      {/* <img src={productImage} /> */}
      <div className="description">
        <p>
          <b>{description}</b>
        </p>
        <p> ${price}</p>
        <p> Nos: {quantity}</p>
      </div>
      <button className="addToCartBttn" onClick={() => {
        // addToCart(medicineAddress)
        let array = props.orderArray
        console.log(props.orderArray)
        array.push.apply(array, sessionStoredOrders)
        array.push(medicineAddress)
        props.setOrderArray(array)
        sessionStorage.setItem('orderArray', JSON.stringify(props.orderArray))
        // console.log(prev)
        console.log(sessionStoredOrders)
        console.log(props.orderArray)
        }
      }>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>

                          {/* Temporary button to attach to database function */}
                          //Wont work due to change in data being sent
                          <br />
                        {/* <button className="addToCartBttn" onClick={() => {
                          
                          //This should be replaced with the current logged in customer
                          //Hardcoded Value
                          // const currentUser = 'Test6'
                          //Has Been Replaced
                          const currentUser = sessionStorage.getItem('username')

                          axios.post(`http://localhost:3500/customer/buy`, {
                              "username": currentUser,
                              "medicineAddress": medicineAddress,
                              "quantity": quantity
                            }
                          )
                      } 
                      }>
                          Buy {cartItemCount > 0 && <> ({cartItemCount})</>}
                        </button> */}
        {/* Temporary button to attach to database function */}
        <br />
      <button className="addToCartBttn" onClick={() => {
        // addToCart(medicineAddress)}

      }
    }>
        Trace {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>

      
    </div>
  );
};
