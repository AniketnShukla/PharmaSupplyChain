import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import "./cart.css";
import { useState, useEffect } from "react";
import axios from 'axios'

export const Cart = () => { 
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const [MEDS, setMEDS] = useState([])
  const [orderedMEDS, setorederedMEDS] = useState([])
  const [totalAmount, setTotalAmount] = useState(0)

  // const totalAmount = getTotalCartAmount();

  useEffect(() => {
    //fetch all medicines from DB
    axios.get('http://localhost:3500/meds')
    .then((response) => {
      setMEDS(response.data);
    })
    .catch(e => console.log(e))
  

  },[]);
  useEffect(() => {
    // console.log(MEDS)
      //get orderArray from session Storage
      const orderArrayString = sessionStorage.getItem('orderArray');
      if(orderArrayString) {
        const orderArray = JSON.parse(orderArrayString)
        console.log(orderArray)
        // console.log(orderArray.find(element => element === MEDS))
        // working here!!!!! v 
        const orderedMedsData = MEDS.filter( (med) => {
          // console.log(med)
          return orderArray.find(element => element === med.medicineAddress)
        })
        setorederedMEDS(orderedMedsData)
      }
  },[MEDS])

  const navigate = useNavigate();

  return (
    <div className="cartMain">
      <Navbar />
      <div className="cart">
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div className="cart">
          {orderedMEDS.map((med) => {
            // if (cartItems[product.id] !== 0) {
              return <CartItem 
                        data={med} 
                        key={med._id}
                        totalAmount = {totalAmount}
                        setTotalAmount = {setTotalAmount}
                        />;
            // }
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p> Subtotal: ${totalAmount} </p>
            <button onClick={() => navigate("/shop")}>
              {" "}
              Continue Shopping{" "}
            </button>
            <button
              onClick={() => {
                // checkout();
                const currentUser = sessionStorage.getItem('username')

                // const currentUser = 'Test5'

                axios.post(`http://localhost:3500/customer/buy`, {
                    "username": currentUser,
                    "orderedMeds": orderedMEDS,
                    // "quantity": quantity
                }).then((res) => {
                  alert(res.status)
                }).catch(e => {
                  console.log(e);
                })
                
                alert('Order Placed, Pay ' + totalAmount )
                setorederedMEDS([])
                setTotalAmount(0)
                sessionStorage.removeItem('orderArray')
                // navigate("/checkout");
              }}
            >
              {" "}
              Place Order{" "}
            </button>
          </div>
        ) : (
          <h1> Your Cart is Empty :(</h1>
        )}
      </div>
    </div>
  );
};
