import React, { useEffect, useState } from "react";
// import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { Navbar } from "../../components/navbar";
import axios from 'axios';
export const Shop = () => {
  const [MEDS, setMEDS] = useState([])
  const [orderArray, setOrderArray] = useState([])
  // alert(orderArray)
  useEffect(() => {
  axios.get('http://localhost:3500/meds')
  .then((response) => {
    setMEDS(response.data)
  })
  .catch(e => console.log(e))
},[]);

  return (
    <div className="shop">
      <Navbar />
      <div className="shopTitle">
        <h1>PharmaBlocks</h1>
      </div>

      <div className="products">
        {MEDS.map((med) => (
          // <Product data={product} />
          < Product data={med} setOrderArray = {setOrderArray} orderArray = {orderArray} />
        ))}
      </div>
    </div>
  );
};
