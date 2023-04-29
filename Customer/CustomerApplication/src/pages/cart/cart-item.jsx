import { useState } from "react";
import { useEffect } from "react";

export const CartItem = (props) => {
  // const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
  const [ quantity, setQuantity ] = useState(0);
  const [ updateAmount, setUpdateAmount ] = useState(0);
  // const setToBuyMEDS = props.setToBuyMEDS;
  const setTotalAmount = props.setTotalAmount;
  const data = props.data;
  useEffect(() => {
    setTotalAmount((prev) => {
      return (prev + updateAmount)
    })
    let buyMedObj = {
      'medicineAddress': props.data.medicineAddress,
      'quantity': quantity 
    }
    if(quantity >0){
    props.setToBuyMEDS((prev) => {
      console.log(prev)
      console.log(props.data.medicineAddress)
      
      if(prev?.find((x) => x?.medicineAddress === props.data.medicineAddress)){
          let foundObj = prev?.find((x) => x?.medicineAddress === props.data.medicineAddress);
          let tempArray = prev?.filter((x) => x?.medicineAddress !== data.medicineAddress);
          // console.log(foundObj)
      //   console.log(tempArray)
          foundObj.quantity = quantity;
            tempArray.push(foundObj);
            return tempArray;
          }
          else{
            //   console.log(typeof prev)
            // if(typeof prev === Object)
            prev.push(buyMedObj)
          }
          // let ar = prev;
          // let array
          // if (typeof ar == Object)
          // array = ar.push(buyMedObj); 
          // return array;
          return prev
        })
      }
      },[quantity])

  // console.log(props)
  return (
    <div className="cartItem">
      {/* <img src={productImage} /> */}
      <div className="description">
        <p>
          <b>{props.data.description}</b>
        </p>
        <p> Price: ₹{props.data.price}</p>
        <p> Quantity: {props.data.quantity}</p>
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
          <button onClick={() => {
            if(quantity === props.data.quantity+1){
              alert(`Cannot Order More than ${props.data.quantity}`)
            }
            else{
              setQuantity((prev) => {
                setUpdateAmount(props.data.price * (prev + 1));
                return prev+1
                })
            }
            }
          }> + </button>
        </div>
      </div>
    </div>
  );
};
