import React from "react";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const { logout } = useAuth0();
  const user = sessionStorage.getItem('username')
  return (
    <div className="navbar">
      <img src={logo} class="logo" />
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/myorders">MyOrders</a>
        </li>
        <li>
          <a href="/cart">CART</a>
        </li>
        <li>
          <a
            href="/"
            onClick={() => {
              sessionStorage.removeItem("username");
              window.location.href = "/";
            }}
          >
            Logout
          </a>
        </li>
      </ul>
      <h3>Welcome {user}</h3>
    </div>
  );
};
