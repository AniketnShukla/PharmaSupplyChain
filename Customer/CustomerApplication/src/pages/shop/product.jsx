import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import axios from 'axios'

export const Product = (props) => {
  //Assigned temporary price, work on this later **** very important
  const price = 150;
  const { medicineAddress, description, quantity} = props.data;
  
  const { addToCart, cartItems } = useContext(ShopContext);
  // console.log(props.data)

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
        addToCart(medicineAddress)
        let array = props.orderArray
        array.push(medicineAddress)
        props.setOrderArray(array)
        localStorage.setItem('orderArray', JSON.stringify(props.orderArray))
        // console.log(prev)
        console.log(props.orderArray)
        }
      }>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>

        {/* Temporary button to attach to database function */}
        <br />
      <button className="addToCartBttn" onClick={() => {
        
        //This should be replaced with the current logged in customer
        //Hardcoded Value
        const currentUser = 'Test6'

        axios.post(`http://localhost:3500/customer/buy`, {
            "username": currentUser,
            "medicineAddress": medicineAddress,
            "quantity": quantity
          }
        )
    } 
    }>
        Buy {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
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
