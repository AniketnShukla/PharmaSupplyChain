import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useState } from "react";
import { useEffect } from "react";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  // const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
  const [ quantity, setQuantity ] = useState(0);
  const [ updateAmount, setUpdateAmount ] = useState(0);

  useEffect(() => {
    props.setTotalAmount((prev) => {
      return (prev + updateAmount)
    })
  },[updateAmount])

  console.log(props)
  return (
    <div className="cartItem">
      {/* <img src={productImage} /> */}
      <div className="description">
        <p>
          <b>{props.data.description}</b>
        </p>
        <p> Price: ₹{props.data.price}</p>
        <div className="countHandler">
          <button onClick={() => setQuantity((prev) => {
            setUpdateAmount(props.data.price * -(prev));
            if(prev > 0) return prev - 1;
            else return 0;
          })}> - </button>
          <input
            value={quantity}
            //gives error , because it's not a controlled form component
            // onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
          <button onClick={() => setQuantity((prev) => {
            setUpdateAmount(props.data.price * (prev + 1));
            return prev+1
          })}> + </button>
        </div>
      </div>
    </div>
  );
};
